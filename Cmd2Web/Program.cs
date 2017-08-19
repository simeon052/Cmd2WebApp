using System;
using System.Collections.Generic;
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
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"Message from Command line テスト : {i}");
                Thread.Sleep(1000);
            }
        }
    }
}
