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
            if (args.Count() >= 1){
                Console.OutputEncoding = new UTF8Encoding();
                Console.WriteLine(args[0]);
                var str = args[0].Trim();
                var di = new DirectoryInfo(@".\images");
                foreach (var f in di.GetFiles("*.*", SearchOption.TopDirectoryOnly).Where(f => { return f.Name.Contains(str); }))
                {
                    Console.WriteLine($"<a href = \"images\\{f.Name}\" >{f.Name}</a>");
                    Thread.Sleep(100);
                }
            }
        }
    }
}
