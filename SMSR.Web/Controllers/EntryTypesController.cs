using SMSR.Context;
using SMSR.Entities;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace SMSR.Web.Controllers
{
    public class EntryTypesController : ApiController
    {
        private StatusReportContext db = new StatusReportContext();

        // GET: api/EntryTypes
        public IQueryable<EntryType> GetEntryTypes()
        {
            return db.EntryTypes;
        }

        // GET: api/EntryTypes/5
        [ResponseType(typeof(EntryType))]
        public IHttpActionResult GetEntryType(int id)
        {
            EntryType entryType = db.EntryTypes.Find(id);
            if (entryType == null)
            {
                return NotFound();
            }

            return Ok(entryType);
        }

        // PUT: api/EntryTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEntryType(int id, EntryType entryType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != entryType.Id)
            {
                return BadRequest();
            }

            db.Entry(entryType).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntryTypeExists(id))
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

        // POST: api/EntryTypes
        [ResponseType(typeof(EntryType))]
        public IHttpActionResult PostEntryType(EntryType entryType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EntryTypes.Add(entryType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = entryType.Id }, entryType);
        }

        // DELETE: api/EntryTypes/5
        [ResponseType(typeof(EntryType))]
        public IHttpActionResult DeleteEntryType(int id)
        {
            EntryType entryType = db.EntryTypes.Find(id);
            if (entryType == null)
            {
                return NotFound();
            }

            db.EntryTypes.Remove(entryType);
            db.SaveChanges();

            return Ok(entryType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EntryTypeExists(int id)
        {
            return db.EntryTypes.Count(e => e.Id == id) > 0;
        }
    }
}