# SMSR - a simple status report management application

SMSR is a really simple ASP.NET/Angular application for managing weekly status reports
and generating monthly versions of them. It uses EF Code First as its ORM, and Angular
on the front end. Also it uses ng-bootstrap.

# Business Objects (entities)
    Entrytype
    Project
    StatusReport
    StatusReportEntry
    User

# Application Functions
    * add/edit report -- add/edit a status report
    * list reports -- filter/list status reports
    * view report -- view the details of the report
    * generate MSR -- generate a basic monthly status report
    * admin -- manage entry types, projects, users

# JsDecommenter

JsDecommenter is a little experimental application that strips block comments
(e.g. /* ... */ ) from javascript files. My intention was to run this after webpacking,
since webpack does not minify copyright comments from its output. But it turns out that
running JsDecommenter doesn't provide a lot of value; the size of copyright comments in
comparison to webpack output is miniscule.