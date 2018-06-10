# SMSR.Context: the EF context

# SMSR.Database: thedatabase project
    dbo
        tables
            statusentries.sql
                id, entrytypeid, entryvalue, entrynotes, statusreportid
            statusreports.sql
                id, reportdate, projectid, authorid
            entrytypes.sql
                id, name
            projects.sql
                id, name
            authors.sql
                id, name, dn

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