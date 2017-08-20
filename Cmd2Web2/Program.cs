using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cmd2Web2
{
    class Program
    {

        static void Main(string[] args)
        {
            List<string> keyword = new List<string> { "food", "cat" }; 
            Console.OutputEncoding = new UTF8Encoding();
            foreach(var s in keyword)
            {
                Console.WriteLine($"{s}");
            }
        }
    }
}
