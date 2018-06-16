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

            Console.WriteLine("READING FROM " + args[0]);
            using (var reader = new StreamReader(args[0]))
            {
                var content = reader.ReadToEnd();

                var result = new StringBuilder();

                var accumulator = new StringBuilder();

                var state = "root";
                foreach (var c in content)
                {
                    switch (state)
                    {
                        case "root":
                            if (c == '/')
                            {
                                accumulator.Append(c);
                                state = "slash";
                            }
                            else
                            {
                                result.Append(c);
                            }
                            break;
                        case "slash":
                            if (c == '/')
                            {
                                accumulator.Append(c);
                            }
                            else if (c == '*')
                            {
                                state = "sta1";
                            }
                            else
                            {
                                result.Append(accumulator.ToString());
                                result.Append(c);
                                accumulator = new StringBuilder();
                                state = "root";
                            }
                            break;
                        case "star1":
                            if (c == '*')
                            {
                                state = "star2";
                            }
                            else
                            {
                                // NOP
                            }
                            break;
                        case "star2":
                            if (c == '/')
                            {
                                accumulator = new StringBuilder();
                                state = "root";
                            }
                            else if (c == '*')
                            {
                                // NOP
                            }
                            else
                            {
                                state = "star1";
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

            Console.WriteLine("COPYING TO " + args[0]);
            File.Copy(tempfile, args[0], true);

            Console.WriteLine("DELETING " + tempfile);
            File.Delete(tempfile);
        }
    }
}
