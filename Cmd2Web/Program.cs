using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Cmd2Web
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = new UTF8Encoding();
            var di = new DirectoryInfo(@".\images");
            foreach(var f in di.GetFiles("*.jpg", SearchOption.TopDirectoryOnly))
            {
                //                Console.WriteLine($"Message from command line :  {i} - {args[0] ?? ""}");
                Console.WriteLine($"<a href = \"images\\{f.Name}\" >{f.Name}</a>");
                Thread.Sleep(500);
            }
        }
    }
}
