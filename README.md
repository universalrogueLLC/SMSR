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
