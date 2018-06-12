using SMSR.Context;
using SMSR.Entities;
using SMSR.Web.Code;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace SMSR.Web.Controllers
{
    public class UsersController : ApiController
    {
        private StatusReportContext context = new StatusReportContext();

        // GET: api/Users
        public IQueryable<User> GetUsers()
        {
            return context.Users;
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            if (id == 0)
            {
                var result = new User()
                {
                    DN = AuthenticationService.GetDN()
                };

                var user = context.Users.FirstOrDefault(x => x.DN == result.DN);
                if (user != null)
                {
                    result.Id = user.Id;
                    result.IsAdmin = user.IsAdmin;
                    result.IsAuthor = user.IsAuthor;
                    result.Name = user.Name;
                }

                return Ok(result);
            }
            else
            {
                var result = context.Users.Find(id);
                if (result == null)
                {
                    return NotFound();
                }

                return Ok(result);
            }
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            context.Entry(user).State = EntityState.Modified;

            try
            {
                context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.Users.Add(user);
            context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            context.Users.Remove(user);
            context.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return context.Users.Count(e => e.Id == id) > 0;
        }
    }
}