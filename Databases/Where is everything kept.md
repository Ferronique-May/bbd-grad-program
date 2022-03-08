# Where is everything kept?

- SQL Server maps a database over a set of operating-system files.

- Data and log information are never mixed in the same file, and individual files are used only by one database.

- Filegroups are named collections of files and are used to help with data placement and administrative tasks such as backup and restore operations.

- SQL Server databases have three types of files: 

1. Primary data files - Starting point of the database and points to the other files in the database. Every database has one primary data file. Recommended file name extension .mdf

2. Secondary data files -  make up all the data files except the primary file. Some databases may not have any secondary data files. Recommended file name extension .ndf

3. Log files - Obvious log information that can be used to recover database. Must be atleast one of these for each database. Recommended file name extension .ldf

Please note: SQL Server (all points apply to SQL Server) does not enforce file name extensions, but these extensions help you identify the different kinds of files and their use. The locations of all the files in a database are recorded in the primary file of the database and in the master database.

