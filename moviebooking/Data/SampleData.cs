using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using moviebooking.Data.Entities;

namespace moviebooking.Data
{
    public static class SampleData
    {
        public static void Initialize(MoviebookingContext context)
        {
            if (!context.Theaters.Any())
            {
                context.Theaters.AddRange(
                    new Theater
                    {
                        Name = "KARO",
                        Address = "Pushkina 1"
                    },
                    new Theater
                    {
                        Name = "Korston",
                        Address = "Ershove 21"
                    },
                    new Theater
                    {
                        Name = "KinoMax",
                        Address = "Pavlukhina 91"
                    }
                );
                context.SaveChanges();
            }
            if (!context.Movies.Any())
            {
                context.Movies.AddRange(
                    new Movie
                    {
                        Name = "Не время умирать",
                        Body = "Джеймс Бонд оставил оперативную службу и наслаждается спокойной жизнью на Ямайке. Все меняется, когда на острове появляется его старый друг Феликс Лейтер из ЦРУ с просьбой о помощи. Миссия по спасению похищенного ученого оказывается опаснее, чем предполагалось изначально. Бонд попадает в ловушку к таинственному злодею, вооруженному опасным технологическим оружием.",
                        Dir = "Кэри Дзёдзи Фукунага",
                        Pic = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jycSKuZ4CvgPWRHdhgPA9q1EC8n.jpg"
                    },
                    new Movie
                    {
                        Name = "Веном 2",
                        Body = "Более чем через год после тех событий журналист Эдди Брок пытается приспособиться к жизни в качестве хозяина инопланетного симбиота Венома, который наделяет его сверхчеловеческими способностями. Брок пытается возродить свою карьеру и берет интервью у серийного убийцы Клетуса Касади, который по воле случая становится хозяином Карнажа и сбегает из тюрьмы после неудавшейся казни.",
                        Dir = "Энди Серкис",
                        Pic = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pZe4xYwDkmxhf3oA8DNEihOW4pW.jpg"
                    },
                    new Movie
                    {
                        Name = "Дюна",
                        Body = "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза своему страху, достоин стать избранным.",
                        Dir = "Дени Вильнёв",
                        Pic = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ssXTSdKairpgpLY1shOIWcyZUw1.jpg"
                    },
                    new Movie
                    {
                        Name = "Матрица: Воскрешение",
                        Body = "Четвертый фильм культовой фантастической киносерии о всемирной симуляции, в которую было погружено человечество, пока в системе не появилась аномалия – бывший хакер Нео. Потеряв память, он снова оказывается в Матрице, посещает психиатра и принимает синие таблетки. Но его продолжают преследовать таинственные видения и обрывки воспоминаний, а однажды на его пути появляется женщина из стертого прошлого – Тринити.",
                        Dir = "Лана Вачовски",
                        Pic = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4DafIAQqtHnpNCNl720sBZzyCCT.jpg"
                    },
                    new Movie
                    {
                        Name = "Круиз по джунглям",
                        Body = "Хитростью и немалой сноровкой раздобыв бесценную карту верховьев Амазонки, бойкая археолог Лили Хоутон отправляется в экспедицию, чтобы найти волшебное дерево, цветок которого — согласно легенде — обладает невероятными целебными свойствами. Прихватив с собой младшего брата, который не в восторге от перспективы поездки в дикие джунгли, девушка нанимает проводника — капитана круизного пароходика по имени Фрэнк. Вся компания пускается в приключение, где их подстерегают не только смертельно опасные представители амазонской флоры и фауны, но и ловушки, подстроенные участниками конкурирующей экспедиции.",
                        Dir = "Jaume Collet-Serra",
                        Pic = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8I7lrzlQlGCZxCYUaPBHFALEDlM.jpg"
                    }
                );
                context.SaveChanges();
            }
            if (!context.Screenings.Any())
            {
                var theaters = context.Theaters.ToList();
                var movies = context.Movies.ToList();
                Console.WriteLine("HELLO WORLD");
                foreach (var theater in theaters)
                {
                    foreach (var movie in movies)
                    {
                        for (int day = 20; day < 23; day++)
                            for (int hour = 10; hour < 16; hour += 2)
                                for (int min = 0; min < 60; min += 30)
                                {
                                    Screening toAdd = new Screening
                                    {
                                        Theater = theater,
                                        Movie = movie,
                                        Time = new DateTime(2021, 10, day, hour, min, 0)
                                    };
                                    context.Screenings.Add(toAdd);
                                }
                    }
                }
                context.SaveChanges();
            }
        }
    }
}