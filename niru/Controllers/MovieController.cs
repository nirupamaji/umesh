using Microsoft.AspNetCore.Mvc;

namespace niru.Controllers
{
    public class MovieController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
