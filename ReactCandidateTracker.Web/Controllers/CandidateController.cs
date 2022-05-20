using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactCandidatetracker.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _ConnString;
        public CandidateController(IConfiguration con)
        {
            _ConnString = con.GetConnectionString("ConStr");
        }
        [Route("AddCandidate")]
        [HttpPost]
        public void AddCandidate(Candidate c)
        {
            CandidateRepository repo = new(_ConnString);
            repo.AddCandidate(c);
        }

        [Route("GetCandidates")]
        [HttpGet]
        public List<Candidate> GetCandidates()
        {
            CandidateRepository repo = new(_ConnString);
            return repo.GetPendingCandidates();
        }
        [Route("GetConfirmedCandidates")]
        [HttpGet]
        public List<Candidate> GetConfirmedCandidates()
        {
            CandidateRepository repo = new(_ConnString);
            return repo.GetConfirmedCandidates();
        }

        [Route("GetRefusedCandidates")]
        [HttpGet]
        public List<Candidate> GetRefusedCandidates()
        {
            CandidateRepository repo = new(_ConnString);
            return repo.GetRefusedCandidates();
        }
        [Route("GetById")]
        [HttpGet]
        public Candidate GetById(int id)
        {
            CandidateRepository repo = new(_ConnString);
            return repo.GetById(id);
        }
        [Route("updateToConfirmed")]
        [HttpPost]
        public void UpdateToConfirmed(int id)
        {
            CandidateRepository repo = new(_ConnString);
            repo.UpdateToConfirmed(id);
        }
        [Route("updateToRefused")]
        [HttpPost]
        public void UpdateToRefused(int id)
        {
            CandidateRepository repo = new(_ConnString);
            repo.UpdateToRefused(id);
        }
        [Route("GetCandidateCount")]
        [HttpGet]
        public object GetCandidateCount()
        {
            CandidateRepository repo = new(_ConnString);
            return repo.GetCandidateCount();
        }
    }
}
