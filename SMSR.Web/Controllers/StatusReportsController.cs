using SMSR.Context;
using SMSR.Entities;
using SMSR.Web.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace SMSR.Web.Controllers
{
    public class StatusReportsController : ApiController
    {
        private StatusReportContext db = new StatusReportContext();

        // GET: api/StatusReports
        public IQueryable<StatusReport> GetStatusReports()
        {
            return db.StatusReports;
        }

        [HttpPost]
        [Route("api/StatusReports/search")]
        public List<SearchResult> SearchStatusReports(SearchCriteria criteria)
        {
            var queryable = db.StatusReports.AsQueryable();

            if (criteria.projectId != "---")
            {
                var projectId = Int32.Parse(criteria.projectId);
                queryable = queryable.Where(x => x.ProjectId == projectId);
            }

            if (criteria.userId != "---")
            {
                var userId = Int32.Parse(criteria.userId);
                queryable = queryable.Where(x => x.UserId == userId);
            }

            if (criteria.beginDate != "")
            {
                var date = DateTime.Parse(criteria.beginDate);
                queryable = queryable.Where(x => x.ReportDate >= date);
            }

            if (criteria.endDate != "")
            {
                var date = DateTime.Parse(criteria.endDate);
                date = date.AddDays(1);
                queryable = queryable.Where(x => x.ReportDate < date);
            }

            return PrepareSearchResults(queryable);
        }

        private List<SearchResult> PrepareSearchResults(IQueryable<StatusReport> queryable)
        {
            return queryable.Select(x => new SearchResult()
            {
                Id = x.Id,
                Author = x.User.Name,
                Project = x.Project.Name,
                ReportDate = x.ReportDate
            }).ToList();
        }

        // GET: api/StatusReports/5
        [ResponseType(typeof(StatusReport))]
        public IHttpActionResult GetStatusReport(int id)
        {
            StatusReport statusReport = db.StatusReports.Find(id);
            if (statusReport == null)
            {
                return NotFound();
            }

            return Ok(statusReport);
        }

        // PUT: api/StatusReports/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStatusReport(int id, StatusReport statusReport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != statusReport.Id)
            {
                return BadRequest();
            }

            db.Entry(statusReport).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StatusReportExists(id))
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

        // POST: api/StatusReports
        [ResponseType(typeof(StatusReport))]
        public IHttpActionResult PostStatusReport(StatusReport statusReport)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.StatusReports.Add(statusReport);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = statusReport.Id }, statusReport);
        }

        // DELETE: api/StatusReports/5
        [ResponseType(typeof(StatusReport))]
        public IHttpActionResult DeleteStatusReport(int id)
        {
            StatusReport statusReport = db.StatusReports.Find(id);
            if (statusReport == null)
            {
                return NotFound();
            }

            db.StatusReports.Remove(statusReport);
            db.SaveChanges();

            return Ok(statusReport);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StatusReportExists(int id)
        {
            return db.StatusReports.Count(e => e.Id == id) > 0;
        }
    }
}