using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JsDecommenter
{
    class Program
    {
        static void Main(string[] args)
        {
            var tempfile = Path.GetTempFileName();

            Generate(args[0], tempfile);

            Copy(tempfile, args[0]);

            Delete(tempfile);
        }

        private static void Generate(string sourcefile, string tempfile)
        {
            Console.WriteLine("READING FROM " + sourcefile);
            using (var reader = new StreamReader(sourcefile))
            {
                var content = reader.ReadToEnd();

                var result = new StringBuilder();

                var accumulator = new StringBuilder();

                var state = States.ROOT;
                foreach (var c in content)
                {
                    switch (state)
                    {
                        case States.ROOT:
                            if (c == '/')
                            {
                                accumulator.Append(c);
                                state = States.SLASH;
                            }
                            else
                            {
                                result.Append(c);
                            }
                            break;
                        case States.SLASH:
                            if (c == '/')
                            {
                                accumulator.Append(c);
                            }
                            else if (c == '*')
                            {
                                state = States.STAR1;
                            }
                            else
                            {
                                result.Append(accumulator.ToString());
                                result.Append(c);
                                accumulator = new StringBuilder();
                                state = States.ROOT;
                            }
                            break;
                        case States.STAR1:
                            if (c == '*')
                            {
                                state = States.STAR2;
                            }
                            else
                            {
                                // NOP
                            }
                            break;
                        case States.STAR2:
                            if (c == '/')
                            {
                                accumulator = new StringBuilder();
                                state = States.ROOT;
                            }
                            else if (c == '*')
                            {
                                // NOP
                            }
                            else
                            {
                                state = States.STAR1;
                            }
                            break;
                    }
                }

                Console.WriteLine("WRITING TO " + tempfile);
                using (var writer = new StreamWriter(tempfile))
                {
                    writer.WriteLine(result.ToString());
                    writer.Close();
                }

                reader.Close();
            }
        }

        private static void Copy(string tempfile, string sourcefile)
        {
            Console.WriteLine("COPYING TO " + sourcefile);
            File.Copy(tempfile, sourcefile, true);
        }

        private static void Delete(string tempfile)
        {
            Console.WriteLine("DELETING " + tempfile);
            File.Delete(tempfile);
        }
    }

    enum States
    {
        ROOT,
        SLASH,
        STAR1,
        STAR2
    }
}
