# SMSR.Context: the EF context

# SMSR.Database: the database project
    dbo
        tables
            statusentries.sql
                id, entrytypeid, entryvalue, entrynotes, statusreportid
            statusreports.sql
                id, reportdate, projectid, authorid
            entrytypes.sql
                id, name, isActive
            projects.sql
                id, name, isActive
            authors.sql
                id, name, dn, isActive

# SMSR.Entities: the entity class library
    StatusEntry
    StatusReport
    Entrytype
    Project
    Author

# SMSR.Web: the web application
    home
        add report -- add a status report
        list reports -- list status reports
        generate MSR -- generate the basic MSR
        admin -- manage entry types, projects, authors
    add/edit report
        project: [___V]
        <add entry>
            type: [___V]  value: [___] notes: [___] <delete>
        <save>
    list reports
        filter: project: [___V] author: [___V] dates: [___] to [___]
        <search>
        data
        data  (hyperlinked to edit this record)
        data
    generate MSR 
        dates: [___] to [___]  project: [___V] <generate>
        data
            data
            data
        data
            data
            data
    admin
        tab: entry types
            CRUD on entry types
        tab: projects
            CRUD on projects
        tab: authors
            CRUD on authors