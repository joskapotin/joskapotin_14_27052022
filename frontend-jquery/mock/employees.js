const employees = [
  {
    firstName: "Jade",
    lastName: "Cannon",
    dateOfBirth: "1980-10-06",
    startDate: "2000-11-07",
    street: "Non adipisicing reic",
    city: "Quos ullam veritatis",
    state: "GU",
    zipCode: "63062",
    department: "Legal",
  },
  {
    firstName: "Lucy",
    lastName: "Bruce",
    dateOfBirth: "1974-12-29",
    startDate: "1990-03-17",
    street: "Quaerat ut aspernatu",
    city: "Sunt dolore minim t",
    state: "TN",
    zipCode: "19816",
    department: "Engineering",
  },
  {
    firstName: "Cara",
    lastName: "Raymond",
    dateOfBirth: "1999-08-10",
    startDate: "2003-05-07",
    street: "Voluptas quos dolore",
    city: "Fugiat perferendis h",
    state: "TN",
    zipCode: "10225",
    department: "Legal",
  },
  {
    firstName: "Halee",
    lastName: "Holland",
    dateOfBirth: "2003-08-27",
    startDate: "2019-10-01",
    street: "Commodi voluptate eo",
    city: "Facere consectetur a",
    state: "AK",
    zipCode: "50242",
    department: "Human Resources",
  },
  {
    firstName: "Shay",
    lastName: "Gray",
    dateOfBirth: "1986-06-23",
    startDate: "2010-10-22",
    street: "Consequatur dolore a",
    city: "In reprehenderit an",
    state: "MP",
    zipCode: "39996",
    department: "Sales",
  },
  {
    firstName: "Dora",
    lastName: "Burton",
    dateOfBirth: "1990-01-09",
    startDate: "2020-07-01",
    street: "Id eveniet dolores ",
    city: "Asperiores dolore ve",
    state: "CA",
    zipCode: "28376",
    department: "Marketing",
  },
  {
    firstName: "Merritt",
    lastName: "Dudley",
    dateOfBirth: "2003-11-23",
    startDate: "1999-12-30",
    street: "Sed ea quibusdam qui",
    city: "Quod deserunt sed ad",
    state: "FL",
    zipCode: "64862",
    department: "Engineering",
  },
  {
    firstName: "Berk",
    lastName: "Sampson",
    dateOfBirth: "1981-10-10",
    startDate: "1984-04-21",
    street: "Vel quo accusamus Na",
    city: "Aliquid numquam esse",
    state: "WA",
    zipCode: "89464",
    department: "Legal",
  },
  {
    firstName: "Byron",
    lastName: "Carr",
    dateOfBirth: "1984-04-27",
    startDate: "1978-04-11",
    street: "In nisi officia nihi",
    city: "Quis et eligendi cul",
    state: "NM",
    zipCode: "56119",
    department: "Sales",
  },
  {
    firstName: "Leslie",
    lastName: "Head",
    dateOfBirth: "1970-11-14",
    startDate: "1975-04-29",
    street: "Fugiat in voluptas s",
    city: "Cupiditate adipisci ",
    state: "GU",
    zipCode: "69420",
    department: "Legal",
  },
  {
    firstName: "Palmer",
    lastName: "Reyes",
    dateOfBirth: "1986-11-10",
    startDate: "2019-01-02",
    street: "Rerum dolor ullam qu",
    city: "Nobis iusto eum vita",
    state: "WA",
    zipCode: "13646",
    department: "Human Resources",
  },
  {
    firstName: "Judith",
    lastName: "Mcmahon",
    dateOfBirth: "1974-01-29",
    startDate: "1990-12-19",
    street: "Sunt consequatur acc",
    city: "Odit nulla fugit fa",
    state: "AZ",
    zipCode: "98121",
    department: "Marketing",
  },
  {
    firstName: "Xavier",
    lastName: "Davidson",
    dateOfBirth: "1988-01-18",
    startDate: "2013-08-22",
    street: "Aut velit pariatur ",
    city: "Repellendus Eum dol",
    state: "DE",
    zipCode: "18625",
    department: "Sales",
  },
  {
    firstName: "Kessie",
    lastName: "Mccormick",
    dateOfBirth: "1985-04-04",
    startDate: "1981-08-02",
    street: "Quas proident accus",
    city: "Dolor fugiat est vol",
    state: "HI",
    zipCode: "30368",
    department: "Engineering",
  },
  {
    firstName: "Patience",
    lastName: "Witt",
    dateOfBirth: "1984-08-27",
    startDate: "2009-07-03",
    street: "Unde dolores ipsa n",
    city: "Nisi aute eum possim",
    state: "GA",
    zipCode: "35187",
    department: "Human Resources",
  },
  {
    firstName: "Eagan",
    lastName: "Rice",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Sales",
    street: "Quia nisi esse haru",
    city: "Veniam et et omnis ",
    state: "AL",
    zipCode: "34451",
  },
  {
    firstName: "April",
    lastName: "Andrews",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Sales",
    street: "Ut ratione culpa ess",
    city: "Cum explicabo Volup",
    state: "AL",
    zipCode: "41521",
  },
  {
    firstName: "Candace",
    lastName: "Stevens",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Sales",
    street: "Saepe modi quisquam ",
    city: "Asperiores vitae mol",
    state: "AL",
    zipCode: "84912",
  },
  {
    firstName: "Jade",
    lastName: "Carter",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Sales",
    street: "Maxime a fugiat laud",
    city: "Quibusdam sint repel",
    state: "AL",
    zipCode: "51029",
  },
  {
    firstName: "Axel",
    lastName: "Gaines",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Sales",
    street: "Velit quia perspici",
    city: "Qui qui sunt tempor",
    state: "AL",
    zipCode: "52338",
  },
  {
    firstName: "Amos",
    lastName: "Joyce",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Sales",
    street: "Tempore amet velit",
    city: "Vero quasi non praes",
    state: "AL",
    zipCode: "77941",
  },
  {
    firstName: "Dora",
    lastName: "Neal",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Marketing",
    street: "Quo error eveniet s",
    city: "Neque exercitationem",
    state: "AL",
    zipCode: "91891",
  },
  {
    firstName: "Tatum",
    lastName: "Rodgers",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Engineering",
    street: "Voluptatem ab eius n",
    city: "Tempor velit omnis u",
    state: "AL",
    zipCode: "85224",
  },
  {
    firstName: "Byron",
    lastName: "Hodges",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Human Resources",
    street: "Fugit laudantium d",
    city: "Veniam qui nulla co",
    state: "AL",
    zipCode: "20782",
  },
  {
    firstName: "Amos",
    lastName: "Garner",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Legal",
    street: "Quam ut necessitatib",
    city: "Deleniti sed consequ",
    state: "AL",
    zipCode: "89720",
  },
  {
    firstName: "Noah",
    lastName: "Church",
    dateOfBirth: "06/07/2022",
    startDate: "06/07/2022",
    department: "Marketing",
    street: "Est occaecat accusan",
    city: "Est nihil voluptate",
    state: "AL",
    zipCode: "70868",
  },
  {
    firstName: "Katelyn",
    lastName: "Brennan",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Consequatur Natus o",
    city: "Molestias porro quas",
    state: "AL",
    zipCode: "69012",
  },
  {
    firstName: "Ursula",
    lastName: "Benson",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Fuga Necessitatibus",
    city: "Dolor illum eius fa",
    state: "AL",
    zipCode: "40375",
  },
  {
    firstName: "Brendan",
    lastName: "Mcfadden",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Unde delectus at cu",
    city: "Enim dolor quisquam ",
    state: "AL",
    zipCode: "39269",
  },
  {
    firstName: "Cameron",
    lastName: "Vance",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Quos natus hic eum u",
    city: "Alias nesciunt beat",
    state: "AL",
    zipCode: "62124",
  },
  {
    firstName: "Channing",
    lastName: "Morales",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Autem aut corrupti ",
    city: "Rerum molestias dolo",
    state: "AL",
    zipCode: "48191",
  },
  {
    firstName: "Joelle",
    lastName: "Vincent",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Earum quidem enim ad",
    city: "Ipsum ut ad delectu",
    state: "AL",
    zipCode: "44515",
  },
  {
    firstName: "Sandra",
    lastName: "Wilkerson",
    dateOfBirth: "06/08/2022",
    startDate: "06/08/2022",
    department: "Sales",
    street: "Id culpa ducimus ",
    city: "Sapiente est in ex e",
    state: "AL",
    zipCode: "78580",
  },
]

export default employees