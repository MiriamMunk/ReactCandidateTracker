using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactCandidatetracker.Data
{
    public class CandidateRepository
    {
        private string _ConnStr;
        public CandidateRepository(string ConnStr)
        {
            _ConnStr = ConnStr;
        }
        public void AddCandidate(Candidate c)
        {
            CandidateDataContext context = new(_ConnStr);
            context.Candidates.Add(c);
            context.SaveChanges();
        }

        public List<Candidate> GetPendingCandidates()
        {
            CandidateDataContext context = new(_ConnStr);
            return context.Candidates.Where(x => x.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public List<Candidate> GetConfirmedCandidates()
        {
            CandidateDataContext context = new(_ConnStr);
            return context.Candidates.Where(x => x.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetRefusedCandidates()
        {
            CandidateDataContext context = new(_ConnStr);
            return context.Candidates.Where(x => x.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }
        public Candidate GetById(int id)
        {
            CandidateDataContext context = new(_ConnStr);
            return context.Candidates.FirstOrDefault(x => x.Id == id);
        }
        public void UpdateToConfirmed(int id)
        {
            CandidateDataContext context = new(_ConnStr);
            context.Database.ExecuteSqlInterpolated($"Update Candidates set RegistrationStatus={1}  where Id={id}");
            context.SaveChanges();
        }
        public void UpdateToRefused(int id)
        {
            CandidateDataContext context = new(_ConnStr);
            context.Database.ExecuteSqlInterpolated($"Update Candidates set RegistrationStatus={2}  where Id={id}");
            context.SaveChanges();
        }
        public object GetCandidateCount()
        {
            CandidateDataContext context = new(_ConnStr);
            int pending = context.Candidates.Where(x => x.RegistrationStatus == RegistrationStatus.Pending).Count();
            int confirmed = context.Candidates.Where(x => x.RegistrationStatus == RegistrationStatus.Confirmed).Count();
            int refused = context.Candidates.Where(x => x.RegistrationStatus == RegistrationStatus.Refused).Count();
            return new { pending = pending, confirmed = confirmed, refused = refused };
        }
    }
}
