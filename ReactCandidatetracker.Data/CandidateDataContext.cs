using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidatetracker.Data
{
    public class CandidateDataContext :DbContext
    {
        private readonly string _connectionString;
        public CandidateDataContext(string connStr)
        {
            _connectionString = connStr;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<Candidate> Candidates { get; set; }
        //public DbSet<RegistrationStatus> registrationStatuses { get; set; }
    }
}
