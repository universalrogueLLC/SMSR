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
    public class StatusReportEntriesController : ApiController
    {
        private StatusReportContext db = new StatusReportContext();

        // GET: api/StatusReportEntries
        public IQueryable<StatusReportEntry> GetStatusReportEntries()
        {
            return db.StatusReportEntries;
        }

        // GET: api/StatusReportEntries/5
        [ResponseType(typeof(StatusReportEntry))]
        public IHttpActionResult GetStatusReportEntry(int id)
        {
            StatusReportEntry statusReportEntry = db.StatusReportEntries.Find(id);
            if (statusReportEntry == null)
            {
                return NotFound();
            }

            return Ok(statusReportEntry);
        }

        // PUT: api/StatusReportEntries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStatusReportEntry(int id, StatusReportEntry statusReportEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != statusReportEntry.Id)
            {
                return BadRequest();
            }

            db.Entry(statusReportEntry).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatusReportEntryExists(id))
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

        // POST: api/StatusReportEntries
        [ResponseType(typeof(StatusReportEntry))]
        public IHttpActionResult PostStatusReportEntry(StatusReportEntry statusReportEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.StatusReportEntries.Add(statusReportEntry);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = statusReportEntry.Id }, statusReportEntry);
        }

        // DELETE: api/StatusReportEntries/5
        [ResponseType(typeof(StatusReportEntry))]
        public IHttpActionResult DeleteStatusReportEntry(int id)
        {
            StatusReportEntry statusReportEntry = db.StatusReportEntries.Find(id);
            if (statusReportEntry == null)
            {
                return NotFound();
            }

            db.StatusReportEntries.Remove(statusReportEntry);
            db.SaveChanges();

            return Ok(statusReportEntry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StatusReportEntryExists(int id)
        {
            return db.StatusReportEntries.Count(e => e.Id == id) > 0;
        }
    }
}