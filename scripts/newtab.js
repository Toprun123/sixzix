var quotes = [
  {
    author: "Edsger W. Dijkstra",
    quote:
      "Computer Science is no more about computers than astronomy is about telescopes.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote: "Simplicity is prerequisite for reliability.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "The computing scientist’s main challenge is not to get confused by the complexities of his own making.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“.",
  },
  {
    author: "Tony Hoare",
    quote:
      "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
  },
  {
    author: "Jeff Hammerbacher",
    quote:
      "The best minds of my generation are thinking about how to make people click ads.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure?',
  },
  {
    author: "Fred Brooks",
    quote: "Adding manpower to a late software project makes it later.",
  },
  {
    author: "Michael Stal",
    quote:
      "Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person.",
  },
  {
    author: "Fred Brooks",
    quote: "Nine women can't make a baby in one month.",
  },
  {
    author: "Jeff Sickel",
    quote: "Deleted code is debugged code.",
  },
  {
    author: "Ken Thompson",
    quote: "When in doubt, use brute force.",
  },
  {
    author: "Fred Brooks",
    quote:
      "When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned.",
  },
  {
    author: "Fred Brooks",
    quote:
      "If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect.",
  },
  {
    author: "Fred Brooks",
    quote:
      "The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures.",
  },
  {
    author: "Fred Brooks",
    quote:
      'The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it "ought" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.',
  },
  {
    author: "Donald Knuth",
    quote:
      "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%.",
  },
  {
    author: "Ken Thompson",
    quote:
      "One of my most productive days was throwing away 1,000 lines of code.",
  },
  {
    author: "Grace Hopper",
    quote:
      "One accurate measurement is worth more than a thousand expert opinions.",
  },
  {
    author: "Fred Brooks",
    quote:
      "What one programmer can do in one month, two programmers can do in two months.",
  },
  {
    author: "Rick Osborne",
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  },
  {
    author: "John Ousterhout",
    quote:
      "A program that produces incorrect results twice as fast is infinitely slower.",
  },
  {
    author: "Poul Anderson",
    quote:
      "I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated.",
  },
  {
    author: "Robert C. Martin",
    quote:
      "Cleaning code does NOT take time. NOT cleaning code does take time.",
  },
  {
    author: "David Gelernter",
    quote:
      "Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity.",
  },
  {
    author: "Edward V. Berard",
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen.",
  },
  {
    author: "Brian Kernighan",
    quote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  },
  {
    author: "Brian Kernighan",
    quote: "Controlling complexity is the essence of computer programming.",
  },
  {
    author: "Chris Wenham",
    quote: "Debugging time increases as a square of the program’s size.",
  },
  {
    author: "Seymour Cray",
    quote:
      "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
  },
  {
    author: "Ron Jeffries",
    quote: "Code never lies, comments sometimes do.",
  },
  {
    author: "Laurence J. Peter",
    quote:
      "Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them.",
  },
  {
    author: "Poul-Henning Kamp",
    quote:
      'Make a guess, double the number, and then move to the next larger unit of time. This rule scales tasks in a very interesting way: a one-minute task explodes by a factor of 120 to take two hours. A one-hour job explodes by "only" a factor 48 to take two days, while a one-day job grows by a factor of 14 to take two weeks.',
  },
  {
    author: "Albert Einstein",
    quote: "I have no special talent. I am only passionately curious.",
  },
  {
    author: "Robert C. Martin",
    quote:
      "The proper use of comments is to compensate for our failure to express ourself in code.",
  },
  {
    author: "Rob Pike",
    quote:
      "When there is no type hierarchy you don’t have to manage the type hierarchy.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Everybody should learn to program a computer, because it teaches you how to think.",
  },
  {
    author: "Chris Sacca",
    quote:
      "Simplicity is hard to build, easy to use, and hard to charge for. Complexity is easy to build, hard to use, and easy to charge for.",
  },
  {
    author: "Bill Gates",
    quote:
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  },
  {
    author: "William Wulf",
    quote:
      "More computing sins are committed in the name of efficiency (without necessarily achieving it) than for any other single reason - including blind stupidity.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "Testing can be a very effective way to show the presence of bugs, but it is hopelessly inadequate for showing their absence.",
  },
  {
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    author: "Buckminster Fuller",
    quote:
      "When I am working on a problem I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.",
  },
  {
    author: "Sean Parent",
    quote:
      "Good code is short, simple, and symmetrical - the challenge is figuring out how to get there.",
  },
  {
    author: "Linus Torvalds",
    quote: "If you think your users are idiots, only idiots will use it.",
  },
  {
    author: "Albert Einstein",
    quote: "Once you stop learning you start dying.",
  },
  {
    author: "Kevlin Henney",
    quote: "No code is faster than no code.",
  },
  {
    author: "Richard P. Gabriel",
    quote:
      "Over half of the time you spend working on a project is spent thinking, and no tool, no matter how advanced, can think for you.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      'We could, for instance, begin with cleaning up our language by no longer calling a bug a bug but by calling it an error. It is much more honest because it squarely puts the blame where it belongs, viz. with the programmer who made the error. The animistic metaphor of the bug that maliciously sneaked in while the programmer was not looking is intellectually dishonest as it disguises that the error is the programmer\'s own creation. The nice thing of this simple change of vocabulary is that it has such a profound effect: while, before, a program with only one bug used to be "almost correct", afterwards a program with an error is just "wrong".',
  },
  {
    author: "Stewart Brand",
    quote:
      "Once a new technology starts rolling, if you’re not part of the steamroller, you’re part of the road.",
  },
  {
    author: "John Gall (author)",
    quote:
      "A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work.",
  },
  {
    author: "Henry Petroski",
    quote:
      "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.",
  },
  {
    author: "Carl Friedrich Gauss",
    quote:
      "I am never satisfied until I have said as much as possible in a few words, and writing briefly takes far more time than writing at length.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
  },
  {
    author: "Pamela Zave",
    quote:
      "The purpose of software engineering is to control complexity, not to create it.",
  },
  {
    author: "Dennis Ritchie",
    quote:
      "Unix is simple. It just takes a genius to understand its simplicity.",
  },
  {
    author: "Dennis Ritchie",
    quote:
      "A language that doesn’t have everything is actually easier to program in than some that do.",
  },
  {
    author: "Richard Feynman",
    quote: "What I cannot build, I do not understand.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Any intelligent fool can make things bigger, more complex, and more violent. It takes a touch of genius – and a lot of courage – to move in the opposite direction.",
  },
  {
    author: "Lawrence Flon",
    quote:
      "There is no programming language, no matter how structured, that will prevent programmers from making bad programs.",
  },
  {
    author: "Martin Fowler",
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  },
  {
    author: "Joe Armstrong (programmer)",
    quote:
      "The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.",
  },
  {
    author: "Ken Thompson",
    quote: "You can’t trust code that you did not totally create yourself.",
  },
  {
    author: "Albert Einstein",
    quote: "A clever person solves a problem. A wise person avoids it.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "The most important single aspect of software development is to be clear about what you are trying to build.",
  },
  {
    author: "Jonathan Shewchuk",
    quote:
      "The only sin is to make a choice without knowing you are making one.",
  },
  {
    author: "Ryan Singer",
    quote:
      "So much complexity in software comes from trying to make one thing do two things.",
  },
  {
    author: "P. J. Plauger",
    quote:
      "Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.",
  },
  {
    author: "John Johnson",
    quote: "First, solve the problem. Then, write the code.",
  },
  {
    author: "Doug Linder",
    quote:
      "A good programmer is someone who looks both ways before crossing a one-way street.",
  },
  {
    author: "David Wheeler (computer scientist)",
    quote:
      "Compatibility means deliberately repeating other people’s mistakes.",
  },
  {
    author: "Jeremy S. Anderson",
    quote:
      "There are two major products that come out of Berkeley: LSD and UNIX. We don't believe this to be a coincidence.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "The competent programmer is fully aware of the strictly limited size of his own skull; therefore he approaches the programming task in full humility, and among other things he avoids clever tricks like the plague",
  },
  {
    author: "Joshua Bloch",
    quote: "When in doubt, leave it out.",
  },
  {
    author: "Linus Torvalds",
    quote:
      "I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
  },
  {
    author: "Albert Einstein",
    quote: "Never memorize something that you can look up.",
  },
  {
    author: "Richard Hamming",
    quote:
      "Mathematicians stand on each others' shoulders and computer scientists stand on each others' toes.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "LISP has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "An organisation that treats its programmers as morons will soon have programmers that are willing and able to act like morons only.",
  },
  {
    author: "Anonymous",
    quote: "The button is working, only, it cannot be seen.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Don't worry about anything. Just do what you can and be the best you can be.",
  },
  {
    author: "Tom DeMarco",
    quote:
      "The business of software building isn't really high-tech at all. It's most of all a business of talking to each other and writing things down.",
  },
  {
    author: "Paul Graham (programmer)",
    quote:
      "In programming the hard part isn’t solving problems, but deciding what problems to solve.",
  },
  {
    author: "Tom DeMarco",
    quote:
      "The manager's function is not to make people work, but to make it possible for people to work.",
  },
  {
    author: "Tom DeMarco",
    quote: "People under pressure don’t work better; they just work faster.",
  },
  {
    author: "Donald Knuth",
    quote:
      "My main conclusion after spending ten years of my life working on the TEX project is that software is hard. It’s harder than anything else I’ve ever had to do.",
  },
  {
    author: "Donald Knuth",
    quote:
      "Science is what we understand well enough to explain to a computer. Art is everything else we do.",
  },
  {
    author: "Donald Knuth",
    quote:
      "We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty.",
  },
  {
    author: "Donald Knuth",
    quote:
      "Email is a wonderful thing for people whose role in life is to be on top of things. But not for me; my role is to be on the bottom of things. What I do takes long hours of studying and uninterruptible concentration.",
  },
  {
    author: "Kevlin Henney",
    quote: "Less code equals less bugs.",
  },
  {
    author: "Charles Babbage",
    quote:
      "As soon as an Analytical Engine exists, it will necessarily guide the future course of science.",
  },
  {
    author: "Charles Babbage",
    quote:
      "The errors which arise from the absence of facts are far more numerous and more durable than those which result from unsound reasoning respecting true data.",
  },
  {
    author: "Charles Babbage",
    quote:
      "We have already mentioned what may, perhaps, appear paradoxical to some of our readers, — that the division of labour can be applied with equal success to mental as to mechanical operations, and that it ensures in both the same economy of time.",
  },
  {
    author: "Charles Babbage",
    quote:
      'On two occasions I have been asked [by members of Parliament]: "Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?" I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.',
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "As long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "If you want more effective programmers, you will discover that they should not waste their time debugging, they should not introduce the bugs to start with.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "A picture may be worth a thousand words, a formula is worth a thousand pictures.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      'I mean, if 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am looking over your shoulders and say to yourself "Dijkstra would not have liked this", well, that would be enough immortality for me.',
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      'Don\'t blame me for the fact that competent programming will be too difficult for "the average programmer" — you must not fall into the trap of rejecting a surgical technique because it is beyond the capabilities of the barber in his shop around the corner.',
  },
  {
    author: "John von Neumann",
    quote:
      "Young man, in mathematics you don't understand things. You just get used to them.",
  },
  {
    author: "Dennis Ritchie",
    quote: "C is quirky, flawed, and an enormous success.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "It is not the task of the University to offer what society asks for, but to give what society needs.",
  },
  {
    author: "Donald Knuth",
    quote:
      "By understanding a machine-oriented language, the programmer will tend to use a much more efficient method; it is much closer to reality.",
  },
  {
    author: "Dennis Ritchie",
    quote:
      "Another danger is that commercial pressures of one sort or another will divert the attention of the best thinkers from real innovation to exploitation of the current fad, from prospecting to mining a known lode.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "Within C++, there is a much smaller and cleaner language struggling to get out.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "Anybody who comes to you and says he has a perfect language is either naïve or a salesman.",
  },
  {
    author: "Alan Turing",
    quote:
      "A man provided with paper, pencil, and rubber, and subject to strict discipline, is in effect a universal machine.",
  },
  {
    author: "Alan Turing",
    quote:
      "The idea behind digital computers may be explained by saying that these machines are intended to carry out any operations which could be done by a human computer.",
  },
  {
    author: "Alan Turing",
    quote: "Machines take me by surprise with great frequency.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      'Maybe "just one little global variable" isn\'t too unmanageable, but that style leads to code that is useless except to its original programmer.',
  },
  {
    author: "Linus Torvalds",
    quote:
      "I'm doing a free operating system (just a hobby, won't be big and professional like GNU).",
  },
  {
    author: "Linus Torvalds",
    quote:
      "If you need more than 3 levels of indentation, you're screwed anyway, and should fix your program.",
  },
  {
    author: "Linus Torvalds",
    quote:
      "An infinite number of monkeys typing into GNU Emacs would never make a good program.",
  },
  {
    author: "Linus Torvalds",
    quote: "If Microsoft ever does applications for Linux it means I've won.",
  },
  {
    author: "Linus Torvalds",
    quote:
      "See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too ;-)",
  },
  {
    author: "Linus Torvalds",
    quote:
      "Really, I'm not out to destroy Microsoft. That will just be a completely unintentional side effect.",
  },
  {
    author: "Linus Torvalds",
    quote: "Talk is cheap. Show me the code.",
  },
  {
    author: "Tom Cargill",
    quote:
      "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  },
  {
    author: "Kent Beck",
    quote:
      "I'm not a great programmer; I'm just a good programmer with great habits.",
  },
  {
    author: "Bill Gates",
    quote:
      "There's only one trick in software, and that is using a piece of software that's already been written.",
  },
  {
    author: "Steve Jobs",
    quote:
      "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.",
  },
  {
    author: "Steve Jobs",
    quote:
      "What a computer is to me is it's the most remarkable tool that we have ever come up with. It's the equivalent of a bicycle for our minds.",
  },
  {
    author: "Marijn Haverbeke",
    quote:
      "Programming, it turns out, is hard. The fundamental rules are typically simple and clear. But programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it.",
  },
  {
    author: "Steve Jobs",
    quote:
      "I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. It is so hard.",
  },
  {
    author: "Steve Jobs",
    quote:
      "A lot of companies hire people to tell them what to do. We hire people to tell us what to do.",
  },
  {
    author: "Marijn Haverbeke",
    quote:
      "Computers themselves can do only stupidly straightforward things. The reason they are so useful is that they do these things at an incredibly high speed.",
  },
  {
    author: "Marijn Haverbeke",
    quote:
      "A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands. But without care, a program’s size and complexity will grow out of control, confusing even the person who created it.",
  },
  {
    author: "Marijn Haverbeke",
    quote:
      "There are many terrible mistakes to make in program design, so go ahead and make them so that you understand them better.",
  },
  {
    author: "Donald Knuth",
    quote:
      "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
  },
  {
    author: "Jamie Zawinski",
    quote:
      "Professionalism has no place in art, and hacking is art. Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer.",
  },
  {
    author: "Quarry worker's creed",
    quote: "We who cut mere stones must always be envisioning cathedrals.",
  },
  {
    author: "Roy Fielding",
    quote:
      "Communication must be stateless in nature, such that each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server.",
  },
  {
    author: "Kent Beck",
    quote:
      "When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.",
  },
  {
    author: "Kent Beck",
    quote:
      "When you find you have to add a feature to a program, and the program's code is not structured in a convenient way to add the feature, first refactor the program to make it easy to add the feature, then add the feature.",
  },
  {
    author: "Martin Fowler",
    quote:
      "There are few things more frustrating or time wasting than debugging. Wouldn't it be a hell of a lot quicker if we just didn't create the bugs in the first place?",
  },
  {
    author: "Martin Fowler",
    quote:
      "With testing, I know straight away when I added a bug. That lets me fix the bug immediately, before it can crawl off and hide.",
  },
  {
    author: "Martin Fowler",
    quote: "I think one of the most valuable rules is avoid duplication.",
  },
  {
    author: "Martin Fowler",
    quote:
      "Often designers do complicated things that improve the capacity on a particular hardware platform when it might actually be cheaper to buy more hardware.",
  },
  {
    author: "John Carmack",
    quote:
      "The situation is so much better for programmers today - a cheap used PC, a linux CD, and an internet account, and you have all the tools necessary to work your way to any level of programming skill you want to shoot for.",
  },
  {
    author: "John Carmack",
    quote:
      "If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it.",
  },
  {
    author: "John Carmack",
    quote:
      "Story in a game is like a story in a porn movie. It's expected to be there, but it's not that important.",
  },
  {
    author: "Paul Graham (programmer)",
    quote:
      "The best thing software can be is easy, but the way to do this is to get the defaults right, not to limit users' choices.",
  },
  {
    author: "Paul Graham (programmer)",
    quote:
      "The most important thing is to be able to think what you want, not to say what you want.",
  },
  {
    author: "Paul Graham (programmer)",
    quote:
      "It's not so important what you work on, so long as you're not wasting your time.",
  },
  {
    author: "Paul Graham (programmer)",
    quote: "The top 5% of programmers probably write 99% of the good software.",
  },
  {
    author: "Paul Graham (programmer)",
    quote:
      "There are few sources of energy so powerful as a procrastinating grad student.",
  },
  {
    author: "Bill Gates",
    quote: "Your most unhappy customers are your greatest source of learning.",
  },
  {
    author: "Bill Gates",
    quote:
      "We're no longer in the days where everything is super well crafted. But at the heart of the programs that make it to the top, you'll find that the key internal code was done by a few people who really know what they were doing.",
  },
  {
    author: "Ward Cunningham",
    quote: "What is simplicity? Simplicity is the shortest path to a solution.",
  },
  {
    author: "Ward Cunningham",
    quote:
      "Putting a new feature into a program is important, but refactoring so new features can be added in the future is equally important.",
  },
  {
    author: "Albert Einstein",
    quote:
      "A new idea comes suddenly and in a rather intuitive way. But intuition is nothing but the outcome of earlier intellectual experience.",
  },
  {
    author: "Ludwig Wittgenstein",
    quote: "The limits of my language mean the limits of my world.",
  },
  {
    author: "Alan Perlis",
    quote:
      "If you have a procedure with 10 parameters, you probably missed some.",
  },
  {
    author: "George Boole",
    quote:
      "That language is an instrument of human reason, and not merely a medium for the expression of thought, is a truth generally admitted.",
  },
  {
    author: "Alan Perlis",
    quote:
      "A language that doesn't affect the way you think about programming, is not worth knowing.",
  },
  {
    author: "Alan Perlis",
    quote: "Simplicity does not precede complexity, but follows it.",
  },
  {
    author: "Alan Perlis",
    quote:
      "A year spent in artificial intelligence is enough to make one believe in God.",
  },
  {
    author: "Alan Perlis",
    quote:
      "The best book on programming for the layman is Alice in Wonderland, but that's because it's the best book on anything for the layman.",
  },
  {
    author: "Alan Perlis",
    quote: "Dealing with failure is easy: Work hard to improve.",
  },
  {
    author: "Alan Perlis",
    quote:
      "A programming language is low level when its programs require attention to the irrelevant.",
  },
  {
    author: "James Gleick",
    quote:
      "Computer programs are the most intricate, delicately balanced and finely interwoven of all the products of human industry to date.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "The effective exploitation of his powers of abstraction must be regarded as one of the most vital activities of a competent programmer.",
  },
  {
    author: "Alan Perlis",
    quote:
      "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
  },
  {
    author: "Hal Abelson",
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
  },
  {
    author: "Mark Gibbs",
    quote:
      "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.",
  },
  {
    author: "Nathaniel Borenstein",
    quote:
      "It should be noted that no ethically-trained software engineer would ever consent to write a DestroyBaghdad procedure. Basic professional ethics would instead require him to write a DestroyCity procedure, to which Baghdad could be given as a parameter.",
  },
  {
    author: "Jef Raskin",
    quote:
      "When we don’t understand a process, we fall into magical thinking about results.",
  },
  {
    author: "John Carmack",
    quote: "Low-level programming is good for the programmer’s soul.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated.",
  },
  {
    author: "Ted Nelson",
    quote:
      "A user interface should be so simple that a beginner in an emergency can understand it within 10 seconds.",
  },
  {
    author: "Ted Nelson",
    quote:
      "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.",
  },
  {
    author: "Alan Perlis",
    quote:
      "Every program has (at least) two purposes: the one for which it was written and another for which it wasn't.",
  },
  {
    author: "Alan Perlis",
    quote:
      "In man-machine symbiosis, it is man who must adjust: The machines can't.",
  },
  {
    author: "Alan Perlis",
    quote: "One man's constant is another man's variable.",
  },
  {
    author: "Bill Gates",
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
  },
  {
    author: "Alan Perlis",
    quote:
      "It is easier to change the specification to fit the program than vice versa.",
  },
  {
    author: "Alan Perlis",
    quote:
      "I think it is inevitable that people program poorly. Training will not substantially help matters. We have to learn to live with it.",
  },
  {
    author: "Henry Ford",
    quote:
      "If we’d asked the customers what they wanted, they would have said “faster horses”.",
  },
  {
    author: "David Parnas",
    quote:
      "I have found that the reason a lot of people are interested in artificial intelligence is the same reason a lot of people are interested in artificial limbs: they are missing one.",
  },
  {
    author: "Leslie Lamport",
    quote:
      "A distributed system is one in which the failure of a computer you didn’t even know existed can render your own computer unusable.",
  },
  {
    author: "Ward Cunningham",
    quote: "It’s all talk until the code runs.",
  },
  {
    author: "Jan L. A. van de Snepscheut",
    quote:
      "In theory, there is no difference between theory and practice. But, in practice, there is.",
  },
  {
    author: "Ellen Ullman",
    quote:
      "We build our computer systems the way we build our cities: over time, without a plan, on top of ruins.",
  },
  {
    author: "Eric S. Raymond",
    quote:
      "The next best thing to having good ideas is recognizing good ideas from your users.",
  },
  {
    author: "Joel Spolsky",
    quote: "Good software, like good wine, takes time.",
  },
  {
    author: "Eric S. Raymond",
    quote:
      "Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot.",
  },
  {
    author: "Filipe Fortes",
    quote:
      "Debugging is like being the detective in a crime movie where you are also the murderer.",
  },
  {
    author: "Dennis Ritchie",
    quote:
      "What we wanted to preserve was not just a good environment in which to do programming, but a system around which fellowship could form.",
  },
  {
    author: "Marvin Minsky",
    quote: "Once the computers got control, we might never get it back.",
  },
  {
    author: "Jef Raskin",
    quote:
      "A computer shall not waste your time or require you to do more work than is strictly necessary.",
  },
  {
    author: "George Boole",
    quote:
      "Of the many forms of false culture, a premature converse with abstractions is perhaps the most likely to prove fatal to the growth of a masculine vigour of intellect.",
  },
  {
    author: "Ken Thompson",
    quote:
      "C++ certainly has its good points. But by and large I think it's a bad language. It does a lot of things half well and it’s just a garbage heap of ideas that are mutually exclusive. It’s way too big, way too complex. And it’s obviously built by a committee.",
  },
  {
    author: "George Boole",
    quote:
      "No matter how correct a mathematical theorem may appear to be, one ought never to be satisfied that there was not something imperfect about it until it also gives the impression of being beautiful.",
  },
  {
    author: "Ada Lovelace",
    quote:
      "The Analytical Engine does not occupy common ground with mere 'calculating machines.' It holds a position wholly its own, and the considerations it suggests are more interesting in their nature.",
  },
  {
    author: "Ada Lovelace",
    quote:
      "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
  },
  {
    author: "Ada Lovelace",
    quote:
      "In the case of the Analytical Engine, we have undoubtedly to lay out a certain capital of analytical labour in one particular line, but this is in order that the engine may bring us in a much larger return in another line.",
  },
  {
    author: "Ada Lovelace",
    quote:
      "We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.",
  },
  {
    author: "George Boole",
    quote:
      "The design of the following treatise is to investigate the fundamental laws of those operations of the mind by which reasoning is performed; to give expression to them in the symbolical language of a Calculus, and upon this foundation to establish the science of Logic and construct its method.",
  },
  {
    author: "John von Neumann",
    quote:
      "Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin. For, as has been pointed out several times, there is no such thing as a random number.",
  },
  {
    author: "George Boole",
    quote:
      "There is not only a close analogy between the operations of the mind in general reasoning and its operations in the particular science of Algebra, but there is to a considerable extent an exact agreement in the laws by which the two classes of operations are conducted.",
  },
  {
    author: "John von Neumann",
    quote:
      "A large part of mathematics which becomes useful developed with absolutely no desire to be useful, and in a situation where nobody could possibly know in what area it would become useful.",
  },
  {
    author: "Friedrich Bauer",
    quote:
      "Software engineering is the part of computer science which is too difficult for the computer scientist.",
  },
  {
    author: "Grady Booch",
    quote:
      "The amateur software engineer is always in search of magic, some sensational method or tool whose application promises to render software development trivial. It is the mark of the professional software engineer to know that no such panacea exist.",
  },
  {
    author: "Grady Booch",
    quote:
      "Good people with a good process will outperform good people with no process every time.",
  },
  {
    author: "Grady Booch",
    quote:
      "The entire history of software engineering is that of the rise in levels of abstraction.",
  },
  {
    author: "Hal Abelson",
    quote:
      "The reason that we think computer science is about computers is pretty much the same reason that the Egyptians thought geometry was about surveying instruments: when some field is just getting started and you don't really understand it very well, it's very easy to confuse the essence of what you're doing with the tools that you use.",
  },
  {
    author: "Alan Kay",
    quote:
      "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
  },
  {
    author: "Bill Gates",
    quote:
      "Is studying computer science the best way to prepare to be a programmer? No. the best way to prepare is to write programs, and to study great programs that other people have written.",
  },
  {
    author: "Richard Feynman",
    quote:
      "Computer science differs from physics in that it is not actually a science. It does not study natural objects. Rather, computer science is like engineering; it is all about getting something to do something.",
  },
  {
    author: "Richard Hamming",
    quote: "The purpose of computing is insight, not numbers.",
  },
  {
    author: "Albert Einstein",
    quote:
      "All of our exalted technological progress, civilization for that matter, is comparable to an axe in the hand of a pathological criminal.",
  },
  {
    author: "Arthur C. Clarke",
    quote:
      "When a distinguished but elderly scientist states that something is possible, they are almost certainly right. When they state that something is impossible, they are very probably wrong.",
  },
  {
    author: "Dennis Ritchie",
    quote:
      "Computer science research is different from these more traditional disciplines. Philosophically it differs from the physical sciences because it seeks not to discover, explain, or exploit the natural world, but instead to study the properties of machines of human creation.",
  },
  {
    author: "Arthur C. Clarke",
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "While much attention has been focused on high-level software architectural patterns, what is, in effect, the de-facto standard software architecture is seldom discussed: the Big Ball of Mud.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "All too many of our software systems are, architecturally, little more than shantytowns.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "Managing a large project is a qualitatively different problem from managing a small one, just as leading a division of infantry into battle is different from commanding a small special forces team.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "When you build a prototype, there is always the risk that someone will say \"that's good enough, ship it\". One way to minimize the risk of a prototype being put into production is to write the prototype in using a language or tool that you couldn't possibly use for a production version.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "Sadly, architecture has been undervalued for so long that many engineers regard life with a Big Ball of Mud as normal.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "The real problem with throwaway code comes when it isn't thrown away.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote: "Sometimes it’s just easier to throw a system away, and start over.",
  },
  {
    author: "Eric S. Raymond",
    quote:
      "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
  },
  {
    author: "Randall E. Stross",
    quote:
      "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.",
  },
  {
    author: "Alan Kay",
    quote:
      "I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind.",
  },
  {
    author: "Linus Torvalds",
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
  },
  {
    author: "Alan Perlis",
    quote:
      "Educators, generals, dieticians, psychologists, and parents program. Armies, students, and some societies are programmed.",
  },
  {
    author: "L. Peter Deutsch",
    quote: "To iterate is human, to recurse divine.",
  },
  {
    author: "Alan Perlis",
    quote:
      "For all its power, the computer is a harsh taskmaster. Its programs must be correct, and what we wish to say must be said accurately in every detail.",
  },
  {
    author: "John Locke",
    quote:
      "The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.",
  },
  {
    author: "Gerald Weinberg",
    quote:
      "When program developers are not territorial about their code and encourage others to look for bugs and potential improvements, progress speeds up dramatically.",
  },
  {
    author: "Anonymous",
    quote:
      "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  },
  {
    author: "Richard E. Pattis",
    quote:
      "When debugging, novices insert corrective code; experts remove defective code.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "It turns out that style matters in programming for the same reason that it matters in writing. It makes for better reading.",
  },
  {
    author: "Douglas Crockford",
    quote: "Computer programs are the most complex things that humans make.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Most programming languages contain good parts and bad parts. I discovered that I could be better programmer by using only the good parts and avoiding the bad parts.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Good architecture is necessary to give programs enough structure to be able to grow large without collapsing into a puddle of confusion.",
  },
  {
    author: "Douglas Crockford",
    quote: "JavaScript is the world's most misunderstood programming language.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "In JavaScript, there is a beautiful, elegant, highly expressive language that is buried under a steaming pile of good intentions and blunders.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Software is usually expected to be modified over the course of its productive life. The process of converting one correct program into a different correct program is extremely challenging.",
  },
  {
    author: "Eric S. Raymond",
    quote:
      "Every good work of software starts by scratching a developer’s personal itch.",
  },
  {
    author: "Anonymous",
    quote:
      "You can have the project: Done On Time. Done On Budget. Done Properly - Pick two.",
  },
  {
    author: "Andy Hunt (author)",
    quote:
      "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
  },
  {
    author: "Steve Wozniak",
    quote: "Never trust a computer you can’t throw out a window.",
  },
  {
    author: "Alan Kay",
    quote: "The best way to predict the future is to invent it.",
  },
  {
    author: "Martin Fowler",
    quote:
      "If you can get today’s work done today, but you do it in such a way that you can’t possibly get tomorrow’s work done tomorrow, then you lose.",
  },
  {
    author: "Alan Turing",
    quote: "Codes are a puzzle. A game, just like any other game.",
  },
  {
    author: "Damian Conway",
    quote: "Documentation is a love letter that you write to your future self.",
  },
  {
    author: "Bdale Garbee",
    quote: "Life is too short to run proprietary software.",
  },
  {
    author: "Martin Fowler",
    quote:
      "W​henever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent.",
  },
  {
    author: "David Leinweber",
    quote:
      "If you give someone a program, you will frustrate them for a day; if you teach them how to program, you will frustrate them for a lifetime.",
  },
  {
    author: "Mario Fusco",
    quote:
      "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one.",
  },
  {
    author: "Addy Osmani",
    quote: "First do it, then do it right, then do it better.",
  },
  {
    author: "John Carmack",
    quote:
      "The cost of adding a feature isn’t just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion. The trick is to pick the features that don’t fight each other.",
  },
  {
    author: "George Carrette",
    quote:
      "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
  },
  {
    author: "Anders Hejlsberg",
    quote:
      "Just because people tell you it can't be done, that doesn't necessarily mean that it can't be done. It just means that they can't do it.",
  },
  {
    author: "Dennis Ritchie",
    quote:
      "The only way to learn a new programming language is by writing programs in it.",
  },
  {
    author: "Manny Lehman (computer scientist)",
    quote:
      "An evolving system increases its complexity unless work is done to reduce it.",
  },
  {
    author: "Robert C. Martin",
    quote:
      "No matter how slow you are writing clean code, you will always be slower if you make a mess.",
  },
  {
    author: "Rob Pike",
    quote: "Fancy algorithms are slow when n is small, and n is usually small.",
  },
  {
    author: "Manuel Blum",
    quote:
      "The only difference between a FA [finite automata] and a TM [Turing machine] is that the TM, unlike the FA, has paper and pencil. Think about it. It tells you something about the power of writing.",
  },
  {
    author: "Alan Perlis",
    quote: "Within a computer, natural language is unnatural.",
  },
  {
    author: "Brian Cantwell Smith",
    quote:
      "Just because you've implemented something doesn't mean you understand it.",
  },
  {
    author: "Douglas Crockford",
    quote: "That hardly ever happens is another way of saying 'it happens'.",
  },
  {
    author: "Donald Knuth",
    quote:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
  },
  {
    author: "Ivan Sutherland",
    quote:
      "A display connected to a digital computer gives us a chance to gain familiarity with concepts not realizable in the physical world. It is a looking glass into a mathematical wonderland.",
  },
  {
    author: "Ralph Johnson (computer scientist)",
    quote: "Before software can be reusable it first has to be usable.",
  },
  {
    author: "Gordon Bell",
    quote:
      "The cheapest, fastest, and most reliable components are those that aren’t there.",
  },
  {
    author: "Anonymous",
    quote:
      "In order to understand recursion, one must first understand recursion.",
  },
  {
    author: "Don Norman",
    quote: "The hardest part of design is keeping features out.",
  },
  {
    author: "Luciano Ramalho",
    quote: "Premature abstraction is as bad as premature optimization.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Much of the essence of building a program is in fact the debugging of the specification.",
  },
  {
    author: "Elon Musk",
    quote: "Any product that needs a manual to work is broken.",
  },
  {
    author: "Kevlin Henney",
    quote:
      "The act of describing a program in unambiguous detail and the act of programming are one and the same.",
  },
  {
    author: "Elon Musk",
    quote:
      "I think you should always bear in mind that entropy is not on your side.",
  },
  {
    author: "Elon Musk",
    quote:
      "The path to the CEO's office should not be through the CFO's office, and it should not be through the marketing department. It needs to be through engineering and design.",
  },
  {
    author: "Elon Musk",
    quote:
      "People are mistaken when they think that technology just automatically improves. It does not automatically improve. It only improves if a lot of people work very hard to make it better, and actually it will, I think, by itself degrade, actually.",
  },
  {
    author: "Elon Musk",
    quote: "With artificial intelligence we are summoning the demon.",
  },
  {
    author: "Elon Musk",
    quote: "AI is a fundamental risk to the existence of human civilization.",
  },
  {
    author: "Terry Winograd",
    quote:
      "The main activity of programming is not the origination of new independent programs, but in the integration, modification, and explanation of existing ones.",
  },
  {
    author: "Tim Berners-Lee",
    quote: "Cool URIs don't change.",
  },
  {
    author: "Tim Berners-Lee",
    quote:
      "I don't believe in the sort of eureka moment idea. I think it's a myth. I'm very suspicious that actually Archimedes had been thinking about that problem for a long time.",
  },
  {
    author: "Tim Berners-Lee",
    quote: "When I invented the web, I didn't have to ask anyone's permission.",
  },
  {
    author: "Elon Musk",
    quote:
      "We need to be super careful with AI. Potentially more dangerous than nukes.",
  },
  {
    author: "Tim Berners-Lee",
    quote:
      "I invented the Web just because I needed it, really, because it was so frustrating that it didn't exit.",
  },
  {
    author: "Tim Berners-Lee",
    quote:
      "To be a hacker - when I use the term - is somebody who is creative and does wonderful things.",
  },
  {
    author: "Tim Berners-Lee",
    quote: "The Domain Name Server (DNS) is the Achilles heel of the Web.",
  },
  {
    author: "Vannevar Bush",
    quote:
      "Two centuries ago Leibnitz invented a calculating machine which embodied most of the essential features of recent keyboard devices, but it could not then come into use. The economics of the situation were against it.",
  },
  {
    author: "Vannevar Bush",
    quote:
      "Whenever logical processes of thought are employed, there is an opportunity for the machine.",
  },
  {
    author: "Vannevar Bush",
    quote:
      "If scientific reasoning were limited to the logical processes of arithmetic, we should not get very far in our understanding of the physical world. One might as well attempt to grasp the game of poker entirely by the use of the mathematics of probability.",
  },
  {
    author: "Ward Cunningham",
    quote:
      "Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite. The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt. Entire engineering organizations can be brought to a stand-still under the technical debt load.",
  },
  {
    author: "Martin Fowler",
    quote:
      "Like a financial debt, the technical debt incurs interest payments, which come in the form of the extra effort that we have to do in future development because of the quick and dirty design choice.",
  },
  {
    author: "Steve McConnell",
    quote:
      "One of the important implications of technical debt is that it must be serviced. If the debt grows large enough, eventually the company will spend more on servicing its debt than it invests in increasing the value of its other assets.",
  },
  {
    author: "Tim Berners-Lee",
    quote:
      "What's very important from my point of view is that there is one web. Anyone that tries to chop it into two will find that their piece looks very boring.",
  },
  {
    author: "René Descartes",
    quote:
      "Thus it is observable that the buildings which a single architect has planned and executed, are generally more elegant and commodious than those which several have attempted to improve.",
  },
  {
    author: "Danny Hillis",
    quote:
      "Computers are the most complex objects we human beings have ever created, but in a fundamental sense they are remarkably simple.",
  },
  {
    author: "Danny Hillis",
    quote:
      "The magic of a computer lies in its ability to become almost anything you can imagine, as long as you can explain exactly what that is.",
  },
  {
    author: "Danny Hillis",
    quote:
      "The computer is not just an advanced calculator or camera or paintbrush; rather, it is a device that accelerates and extends our processes of thought.",
  },
  {
    author: "Danny Hillis",
    quote:
      "With the right programming, a computer can become a theater, a musical instrument, a reference book, a chess opponent. No other entity in the world except a human being has such an adaptable, universal nature.",
  },
  {
    author: "Danny Hillis",
    quote:
      "Anyone who has ever written a program knows that telling a computer what you want it to do is not as easy as it sounds. Every detail of the computer’s desired operation must be precisely described. For instance, if you tell an accounting program to bill your clients for the amount that each owes, then the computer will send out a weekly bill for $0.00 to clients who owe nothing.",
  },
  {
    author: "Danny Hillis",
    quote:
      "A skilled programmer is like a poet who can put into words those ideas that others find inexpressible.",
  },
  {
    author: "Danny Hillis",
    quote:
      "Every computer language has its Shakespeares, and it is a joy to read their code. A well-written computer program possesses style, finesse, even humor—and a clarity that rivals the best prose.",
  },
  {
    author: "Danny Hillis",
    quote:
      "It turns out that there is no algorithm for examining a program and determining whether or not it is fatally infected with an endless loop. Moreover, it’s not that no one has yet discovered such an algorithm; rather, no such algorithm is possible.",
  },
  {
    author: "Danny Hillis",
    quote:
      "The class of problems that are computable by a digital computer apparently includes every problem that is computable by any kind of device.",
  },
  {
    author: "Hal Abelson",
    quote:
      "The programs we use to conjure processes are like a sorcerer's spells. They are carefully composed from symbolic expressions in arcane and esoteric programming languages that prescribe the tasks we want our processes to perform.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Human beings are not accustomed to being perfect, and few areas of human activity demand it. Adjusting to the requirement for perfection is, I think, the most difficult part of learning to program.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Because of optimism, we usually expect the number of bugs to be smaller than it turns out to be. Therefore testing is usually the most mis-scheduled part of programming.",
  },
  {
    author: "Danny Hillis",
    quote:
      "One of the greatest joys in computer programming is discovering a new, faster, more efficient algorithm for doing something — particularly if a lot of well-respected people have come up with worse solutions.",
  },
  {
    author: "Fred Brooks",
    quote:
      "False scheduling to match the patron's desired date is much more common in our discipline than elsewhere in engineering.",
  },
  {
    author: "Robert L. Glass",
    quote:
      "The best programmers are up to 28 times better than the worst programmers, according to “individual differences” research. Given that their pay is never commensurate, they are the biggest bargains in the software field.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Sackman, Erickson, and Grant were measuring performance of a group of experienced programmers. Within just this group the ratios between the best and worst performances averaged about 10:1 on productivity measurements and an amazing 5:1 on program speed and space measurements!",
  },
  {
    author: "Fred Brooks",
    quote:
      "Conceptual integrity is the most important consideration in system design. It is better to have a system omit certain anomalous features and improvements, but to reflect one set of design ideas, than to have one that contains many good but independent and uncoordinated ideas.",
  },
  {
    author: "Fred Brooks",
    quote:
      "The separation of architectural effort from implementation is a very powerful way of getting conceptual integrity on very large projects.",
  },
  {
    author: "Fred Brooks",
    quote:
      "The general tendency is to over-design the second system, using all the ideas and frills that were cautiously sidetracked on the first one.",
  },
  {
    author: "Fred Brooks",
    quote:
      "The management question, therefore, is not whether to build a pilot system and throw it away. You will do that. The only question is whether to plan in advance to build a throwaway, or to promise to deliver the throwaway to customers.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Program building is an entropy-decreasing process, hence inherently metastable. Program maintenance is an entropy-increasing process, and even its most skillful execution only delays the subsidence of the system into unfixable obsolescence.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Chemical engineers learned long ago that a process that works in the laboratory cannot be implemented in a factory in only one step.",
  },
  {
    author: "Fred Brooks",
    quote:
      "First, we must observe that the anomaly is not that software progress is so slow but that computer hardware progress is so fast. No other technology since civilization began has seen six orders of magnitude price-performance gain in 30 years.",
  },
  {
    author: "Fred Brooks",
    quote:
      'Coding is "90 percent finished" for half of the total coding time. Debugging is "99 percent complete" most of the time.',
  },
  {
    author: "Fred Brooks",
    quote:
      "The complexity of software is an essential property, not an accidental one. Hence descriptions of a software entity that abstract away its complexity often abstract away its essence.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Study after study shows that the very best designers produce structures that are faster, smaller, simpler, cleaner, and produced with less effort. The differences between the great and the average approach an order of magnitude.",
  },
  {
    author: "Fred Brooks",
    quote:
      "A programming systems product takes about nine times as much effort as the component programs written separately for private use.",
  },
  {
    author: "Fred Brooks",
    quote:
      "My rule of thumb is 1/3 of the schedule for design, 1/6 for coding, 1/4 for component testing, and 1/4 for system testing.",
  },
  {
    author: "Fred Brooks",
    quote:
      "First, my wife, my colleagues, and my editors find me to err far more often in optimism than in pessimism. I am, after all, a programmer by background, and optimism is an occupational disease of our craft.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Because we are uncertain about our scheduling estimates, we often lack the courage to defend them stubbornly against management and customer pressure.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Adding people to a software project increases the total effort necessary in three ways: the work and disruption of repartitioning itself, training the new people, and added intercommunication.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Very good professional programmers are ten times as productive as poor ones, at same training and two-year experience level.",
  },
  {
    author: "Fred Brooks",
    quote: "Programming increases goes as a power of program size.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Various studies indicate that the optimal team size is between 2 and 5, with 3 being the mode. With more than 5 team members, team management begins to dominate the work.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "A stupid error is an algorithmically avoidable error. Mainly, you are stupid if you let an error that a program can detect go undetected.",
  },
  {
    author: "Fred Brooks",
    quote:
      "All repairs tend to destroy structure, to increase the entropy and disorder of a system.",
  },
  {
    author: "Thomas J. Watson",
    quote: "I think there is a world market for maybe five\ncomputers.",
  },
  {
    author: "Ken Olsen",
    quote: "There is no reason anyone would want a computer in their home.",
  },
  {
    author: "Michael A. Jackson",
    quote:
      "The beginning of wisdom for a programmer is to recognize the difference between getting his program to work and getting it right.",
  },
  {
    author: "Michael A. Jackson",
    quote:
      "Two things are known about requirements:\n1. They will change!\n2. They will be misunderstood!",
  },
  {
    author: "Daniel T. Barry",
    quote: "Every time you improve process, work becomes harder.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "There is never enough time to do it right, but there is always enough time to fix it or to do it over.",
  },
  {
    author: "Rich Skrenta",
    quote:
      "The more code you have, the more places there are for bugs to hide.",
  },
  {
    author: "Gerald Weinberg",
    quote:
      "If builders built houses the way programmers built programs, the first woodpecker to come along would destroy civilization.",
  },
  {
    author: "Terry Winograd",
    quote:
      "The techniques of artificial intelligence are to the mind what bureaucracy is to human social interaction.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Code is expensive to change, but design is cheaper to change, and requirements are even cheaper to change.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "The cost to repair an error goes up dramatically as project moves towards completion and beyond.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "A team of highly competent programmers who are also highly territorial, egotistical politicians will fail while a team of equally competent programmers, who are also egoless, cooperative, team players will succeed.",
  },
  {
    author: "Daniel T. Barry",
    quote: "For most software, efficiency just does not matter.",
  },
  {
    author: "Harlan Mills",
    quote:
      "The best way to know that you have found the last bug is never to find the first bug.",
  },
  {
    author: "Harlan Mills",
    quote:
      "An interactive debugger is an outstanding example of what is not needed - it encourages trial-and-error hacking rather than systematic design, and also hides marginal people barely qualified for precision programming.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Thoroughly testing a program is impossible (requires unbounded number of test cases); so try to choose test cases that will expose all errors. That’s very difficult, especially since we do not know what all the errors are, and if we did, we would not need the test cases!",
  },
  {
    author: "Harlan Mills",
    quote:
      "The only way for errors to occur in a program is by being put there by the author. No other mechanisms are known.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Reliable computations are obtainable from buggy programs, which after all, are the only kind of programs there are.",
  },
  {
    author: "David Parnas",
    quote:
      "I can build a reliable system with thousands of bugs, if you let me choose my bugs carefully.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Ed Adams of IBM found that 80% of the reliability problems are caused by only 2% of the defects.",
  },
  {
    author: "Jim Horning",
    quote:
      "Hardware is the part you can replace. Software is the part you have to keep, because it’s so expensive and nobody understands it any more.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Any technological or managerial scheme to force documentation can be subverted by unwilling programmers.",
  },
  {
    author: "Jim Horning",
    quote:
      "Good judgement comes from experience. Experience comes from bad judgement.",
  },
  {
    author: "John McCarthy (computer scientist)",
    quote: "Machines as simple as thermostats can be said to have beliefs.",
  },
  {
    author: "Tony Parisi (software developer)",
    quote:
      "A framework can provide 90% of the features we need quickly — giving us a false sense of confidence early in the development cycle — and then be frustratingly hard when it comes to implementing the last 10%.",
  },
  {
    author: "John McCarthy (computer scientist)",
    quote:
      "Mental qualities peculiar to human-like motivational structures, such as love and hate, will not be required for intelligent behavior, but we could probably program computers to exhibit them if we wanted to.",
  },
  {
    author: "Richard Stallman",
    quote:
      "I have met bright students in computer science who have never seen the source code of a large program. They may be good at writing small programs, but they can't begin to learn the different skills of writing large ones if they can't see how others have done it.",
  },
  {
    author: "John McCarthy (computer scientist)",
    quote:
      "Program designers have a tendency to think of the users as idiots who need to be controlled. They should rather think of their program as a servant, whose master, the user, should be able to control it.",
  },
  {
    author: "Richard Stallman",
    quote:
      "In fact, in the 1980s I often came across newly graduated computer science majors who had never seen a real program in their lives. They had only seen toy exercises, school exercises, because every real program was a trade secret.",
  },
  {
    author: "Richard Stallman",
    quote:
      "I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.",
  },
  {
    author: "Richard Stallman",
    quote:
      "I consider that the golden rule requires that if I like a program I must share it with other people who like it. Software sellers want to divide the users and conquer them, making each user agree not to share with others. I refuse to break solidarity with other users in this way.",
  },
  {
    author: "Richard Stallman",
    quote:
      "The free software community rejects the “priesthood of technology”, which keeps the general public in ignorance of how technology works; we encourage students of any age and situation to read the source code and learn as much as they want to know.",
  },
  {
    author: "Richard Stallman",
    quote:
      "The most powerful programming language is Lisp. If you don't know Lisp (or its variant, Scheme), you don't know what it means for a programming language to be powerful and elegant. Once you learn Lisp, you will understand what is lacking in most other languages.",
  },
  {
    author: "Richard Stallman",
    quote:
      "Programming is programming. If you get good at programming, it doesn't matter which language you learned it in, because you'll be able to do programming in any language.",
  },
  {
    author: "Maurice Wilkes",
    quote:
      "It was on one of my journeys between the EDSAC room and the punching equipment the realization came over me with full force that a good part of the remainder of my life was going to be spent in finding errors in my own programs.",
  },
  {
    author: "Maurice Wilkes",
    quote:
      "Since 1954, the raw speed of computers, as measured by the time it takes to do an addition, increased by a factor of 10,000. That means an algorithm that once took 10 minutes to perform can now be done 15 times a second.",
  },
  {
    author: "Richard Hamming",
    quote: "Typing is no substitute for thinking.",
  },
  {
    author: "Donald Knuth",
    quote:
      "A programmer who subconsciously views himself as an artist will enjoy what he does and will do it better.",
  },
  {
    author: "Richard Hamming",
    quote:
      "Perhaps the central problem we face in all of computer science is how we are to get to the situation where we build on top of the work of others rather than redoing so much of it in a trivially different way.",
  },
  {
    author: "Richard Hamming",
    quote:
      "Any unwillingness to learn mathematics today can greatly restrict your possibilities tomorrow.",
  },
  {
    author: "Charles Simonyi",
    quote: "Really good programs live forever.",
  },
  {
    author: "Richard Hamming",
    quote:
      "In science if you know what you are doing you should not be doing it. In engineering if you do not know what you are doing you should not be doing it.",
  },
  {
    author: "Butler Lampson",
    quote:
      "In handling resources, strive to avoid disaster rather than to attain an optimum.",
  },
  {
    author: "John Warnock",
    quote:
      "As with most projects, the last two percent takes fifty percent of the time.",
  },
  {
    author: "Gary Kildall",
    quote:
      "It's fun to sit at a terminal and let the code flow. It sounds strange, but it just comes out my brain; once I'm started, I don't have to think about it.",
  },
  {
    author: "Gary Kildall",
    quote:
      "I think programming is very much a religious experience for a lot of people.",
  },
  {
    author: "Charles Simonyi",
    quote:
      "What is programming? Some people call it a science, some people call it an art, some people call it a skill. I think it has aspects of all three.",
  },
  {
    author: "Bill Gates",
    quote:
      "If you ever talk to a great programmer, you'll find he knows his tools like an artist knows his paintbrushes.",
  },
  {
    author: "Bill Gates",
    quote:
      "Our goals are very simple. We're going to create the software that puts a computer on every desk and in every home.",
  },
  {
    author: "Dan Bricklin",
    quote:
      "The most important part of writing a program is designing the data structures.",
  },
  {
    author: "Bob Frankston",
    quote:
      "Ideas don't disappear. They change form, they merge with other ideas.",
  },
  {
    author: "Peter Roizen",
    quote: "I care not only what the code says but how it looks.",
  },
  {
    author: "Ray Ozzie",
    quote: "Programming is the ultimate field for someone who likes to tinker.",
  },
  {
    author: "Bob Carr",
    quote: "Programming can be addictive.",
  },
  {
    author: "Bob Carr",
    quote:
      "From an artistic standpoint, the best software comes from the realm of intuition.",
  },
  {
    author: "Andy Hertzfeld",
    quote:
      "Then Apple went public toward the end of 1980. All of a sudden, all these people I was working with were millionaires.",
  },
  {
    author: "Toru Iwatani",
    quote: "I'm interested in creating images that communicate with people.",
  },
  {
    author: "Charles Simonyi",
    quote:
      "I think the best way to supervise is by personal example and by frequent code reviews.",
  },
  {
    author: "Butler Lampson",
    quote:
      "There are some basic techniques to control complexity. Fundamentally, I divide and conquer, break things down, and try to write reasonably precise descriptions of what each piece is supposed to do.",
  },
  {
    author: "Charles Simonyi",
    quote:
      "The efficiency of the code decreases with an increase in the number of people working on the program. The most efficient programs are written by a single person.",
  },
  {
    author: "Charles Simonyi",
    quote:
      "I'll bet you that from ten feet away I can tell if a program is bad. I might not guarantee that it is good, but if it looks bad from ten feet, I can guarantee you that it wasn't written with care.",
  },
  {
    author: "Butler Lampson",
    quote:
      "Nobody knows how to build really complicated hardware systems, so designing hardware tends to be simpler. Software is much more complicated.",
  },
  {
    author: "Butler Lampson",
    quote:
      "A beautiful program is like a beautiful theorem: It does the job elegantly.",
  },
  {
    author: "John Warnock",
    quote:
      "To be successful, you want to surround yourself with very talented folks whose skills blend very well. That’s the secret of success.",
  },
  {
    author: "Gary Kildall",
    quote:
      "I start with drawing the data structures, and I spend a lot of time thinking about them. I also think about what the program has to go through before I start writing code.",
  },
  {
    author: "John Warnock",
    quote:
      "Don’t go into a two-year development with nothing coming out in the middle. Have something come out every two months, so you can evaluate, regroup, and restart.",
  },
  {
    author: "Gary Kildall",
    quote:
      "If you learn how to solve problems, you can go through life and do pretty well.",
  },
  {
    author: "Bill Gates",
    quote:
      "A great programmer thinks about the program on a constant basis, whether driving or eating. That method takes an incredible amount of mental energy.",
  },
  {
    author: "Bill Gates",
    quote:
      "The really great programs I've written have all been ones that I have thought about for a huge amount of time before I ever wrote them.",
  },
  {
    author: "Bill Gates",
    quote:
      "There is an amazing commonality in the types of difficulties you run into. In design reviews, I really enjoy being able to provide advice, based on programs that I have done.",
  },
  {
    author: "Fred Brooks",
    quote:
      "The fundamental problem with program maintenance is that fixing a defect has a substantial (20-50 percent) chance of introducing another. So the whole process is two steps forward and one step back.",
  },
  {
    author: "Addy Osmani",
    quote:
      "Really care about the tools you use because they are what make you your best.",
  },
  {
    author: "Michael Hawley",
    quote:
      "What I like about programming is that it really helps you think about how we communicate, how we think, how logic works, how creative arts work.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "One of the things I’ve been pushing is code reading. I think that is the most useful thing that a community of programmers can do for each other—spend time on a regular basis reading each other’s code.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "I think the best way to make JavaScript better would be to\nmake it smaller. If we could just get it down to what it does really well and remove the features that add little or no value, it’s actually a better language.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Readability of code is now my first priority. It’s more important than being fast, almost as important as being correct, but I think being readable is actually the most likely way of making it correct.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Part of what makes programming difficult is most of the time we’re doing stuff we’ve never done before.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "I think of myself as a writer. Sometimes I write in English and sometimes I write in JavaScript.",
  },
  {
    author: "Jaron Lanier",
    quote:
      "People should be able to speak and breathe programs just like they talk now.",
  },
  {
    author: "Joe Armstrong (programmer)",
    quote:
      "If you start removing things, if you get to the point where if you were to remove anything more it would not work any more — at this point it is beautiful.",
  },
  {
    author: "Buckminster Fuller",
    quote:
      "Humanity is acquiring all the right technology for all the wrong reasons.",
  },
  {
    author: "Simon Peyton Jones",
    quote:
      "I characterize functional programming as a radical and elegant attack on the whole enterprise of writing programs.",
  },
  {
    author: "Marijn Haverbeke",
    quote:
      "Size almost always involves complexity, and complexity confuses programmers. Confused programmers, in turn, introduce mistakes (bugs) into programs.",
  },
  {
    author: "Marijn Haverbeke",
    quote:
      "Flaws in computer programs are usually called bugs. It makes programmers feel good to imagine them as little things that just happen to crawl into our work. In reality, of course, we put them there ourselves.",
  },
  {
    author: "L. Peter Deutsch",
    quote:
      "When I was at what I would consider the peak of my abilities, I had extremely trustworthy intuition. I would do things and they would just turn out right.",
  },
  {
    author: "L. Peter Deutsch",
    quote:
      "Every now and then I feel a temptation to design a programming language but then I just lie down until it goes away.",
  },
  {
    author: "L. Peter Deutsch",
    quote:
      "Language systems stand on a tripod. There’s the language, there’s the libraries, and there are the tools. And how successful a language is depends on a complex interaction between those three things.",
  },
  {
    author: "L. Peter Deutsch",
    quote:
      "I would make a strong case that programming languages have not improved qualitatively in the last 40 years. There is no programming language in use today that is qualitatively better than Simula-67.",
  },
  {
    author: "Gottfried Wilhelm Leibniz",
    quote:
      "Instead of the progression of tens, I have for many years used the simplest progression of all, which proceeds by twos, having found that it is useful for the perfection of the science of numbers.",
  },
  {
    author: "L. Peter Deutsch",
    quote:
      "I never in my wildest dreams would have predicted the evolution of the Internet. And I never would’ve predicted the degree to which corporate influence over the Internet has changed its character over time.",
  },
  {
    author: "Ken Thompson",
    quote:
      "I’ve never been a lover of existing code. Code by itself almost rots and it’s gotta be rewritten. Even when nothing has changed, for some reason it rots.",
  },
  {
    author: "Ken Thompson",
    quote:
      "Modern programming scares me in many respects. It confuses me to read a program which you must read top-down. It says “do something.” And you go find “something.” And you read it and it says, “do something else” and you go find something and it says, “do something else” and it goes back to the top maybe. And nothing gets done. It’s just relegating the problem to a deeper and deeper level.",
  },
  {
    author: "Richard Hamming",
    quote:
      "I always spend a day a week learning new stuff. That means I spend 20% more of my time than my colleagues learning new stuff. Now 20% at compound interest means that after four and a half years I will know twice as much as them.",
  },
  {
    author: "Donald Knuth",
    quote:
      "I’ll use dirty tricks for two reasons. One is, if it’s really going to give me a performance improvement. Or sometimes just for pure pleasure. In any case, I document it; I don’t just put it in there.",
  },
  {
    author: "Ken Thompson",
    quote:
      "I’ll throw away code as soon I want to add something to it and I get the feeling that what I have to do to add it is too hard.",
  },
  {
    author: "Donald Knuth",
    quote:
      "The problem is that coding isn’t fun if all you can do is call things out of a library, if you can’t write the library yourself.",
  },
  {
    author: "Donald Knuth",
    quote:
      "I make mistakes because I’m always operating at my limit. If I only stay in comfortable territory all the time, that’s not so much fun.",
  },
  {
    author: "Donald Knuth",
    quote:
      "I’ve got this need to program. I wake up in the morning with sentences of a literate program. Before breakfast — I’m sure poets must feel this — I have to go to the computer and write this paragraph and then I can eat and I’m happy.",
  },
  {
    author: "Donald Knuth",
    quote:
      "The more varieties of different kinds of notations are still useful — don’t only read the people who code like you.",
  },
  {
    author: "Ted Nelson",
    quote:
      "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "Mathematics is important in programming, but it’s just one of a lot of things that are important. If you overemphasize the math then you underemphasize stuff which might be even more important, such as literacy.",
  },
  {
    author: "Ken Thompson",
    quote:
      "Documenting is very, very hard; it’s time-consuming. To do it right, you’ve got to do it like programming. You’ve got to deconstruct it, put it together in nice ways, rewrite it when it’s wrong. People don’t do that.",
  },
  {
    author: "Ted Nelson",
    quote: "Making things easy is hard.",
  },
  {
    author: "Richard Moore (engineer)",
    quote:
      "The difference between theory and practice is that in theory, there is no difference between theory and practice.",
  },
  {
    author: "Jim Coplien",
    quote:
      "You should name a variable using the same care with which you name a first-born child.",
  },
  {
    author: "Robert C. Martin",
    quote:
      "The ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code.",
  },
  {
    author: "Kyle Simpson",
    quote: "There's nothing more permanent than a temporary hack.",
  },
  {
    author: "Gottfried Wilhelm Leibniz",
    quote:
      "As numbers are reduced to the simplest principles, like 0 and 1, a wonderful order is apparent throughout.",
  },
  {
    author: "Ted Nelson",
    quote:
      "In my second year in graduate school, I took a computer course and that was like lightening striking.",
  },
  {
    author: "Ted Nelson",
    quote:
      "They were saying computers deal with numbers. This was absolutely nonsense. Computers deal with arbitrary information of any kind.",
  },
  {
    author: "Ted Nelson",
    quote:
      "Right now you are a prisoner of each application you use. You have only the options that were given you by the developer of that application.",
  },
  {
    author: "Ray Ozzie",
    quote:
      "Complexity kills. It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges and it causes end-user and administrator frustration.",
  },
  {
    author: "Niklaus Wirth",
    quote: "Software gets slower faster than hardware gets faster.",
  },
  {
    author: "David Parnas",
    quote:
      "A computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.",
  },
  {
    author: "Anonymous",
    quote: "A few months writing code can save you a few hours in design.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "Are you quite sure that all those bells and whistles, all those wonderful facilities of your so called powerful programming languages, belong to the solution set rather than the problem set?",
  },
  {
    author: "John von Neumann",
    quote:
      "If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.",
  },
  {
    author: "Bjarne Stroustrup",
    quote: "If you think it's simple, then you have misunderstood the problem.",
  },
  {
    author: "Rob Pike",
    quote: "Object-oriented design is the roman numerals of computing.",
  },
  {
    author: "Steve Jobs",
    quote:
      "It is hard to think that a $2 billion company with 4,300-plus people couldn't compete with six people in blue jeans.",
  },
  {
    author: "Jamie Zawinski",
    quote:
      "Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.",
  },
  {
    author: "Bill Gates",
    quote:
      "Sometimes we do get taken by surprise. For example, when the Internet came along, we had it as a fifth or sixth priority.",
  },
  {
    author: "Ward Cunningham",
    quote:
      "It was a turning point in my programming career when I realized that I didn't have to win every argument.",
  },
  {
    author: "Vint Cerf",
    quote:
      "And programming computers was so fascinating. You create your own little universe, and then it does what you tell it to do.",
  },
  {
    author: "Joshua Bloch",
    quote:
      "The cleaner and nicer the program, the faster it's going to run. And if it doesn't, it'll be easy to make it fast.",
  },
  {
    author: "Philip Greenspun",
    quote:
      "SQL, Lisp, and Haskell are the only programming languages that I've seen where one spends more time thinking than typing.",
  },
  {
    author: "Alan Perlis",
    quote:
      "It is better to have 100 functions operate on one data structure than to have 10 functions operate on 10 data structures.",
  },
  {
    author: "Brian Kernighan",
    quote:
      "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.",
  },
  {
    author: "Marvin Minsky",
    quote:
      "Computer languages of the future will be more concerned with goals and less with procedures specified by the programmer.",
  },
  {
    author: "Alan Turing",
    quote:
      "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote: "The way to arrest entropy in software is to refactor it.",
  },
  {
    author: "Joseph Yoder (computer scientist)",
    quote:
      "Reviews and pair programming provide programmers with something their work would not otherwise have: an audience. Sunlight, it is said is a powerful disinfectant. An immediate audience of one's peers provides immediate incentives to programmers to keep their code clear and comprehensible, as well as functional.",
  },
  {
    author: "John Romero",
    quote:
      "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it.",
  },
  {
    author: "Addy Osmani",
    quote:
      "Be humble, communicate clearly, and respect others. It costs nothing to be kind, but the impact is priceless.",
  },
  {
    author: "Pete Cordell",
    quote:
      "Telling a programmer there's already a library to do X is like telling a songwriter there's already a song about love.",
  },
  {
    author: "Stan Kelly-Bootle",
    quote:
      "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.",
  },
  {
    author: "Edsger W. Dijkstra",
    quote:
      "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.",
  },
  {
    author: "Elon Musk",
    quote:
      "There certainly will be job disruption. Because what's going to happen is robots will be able to do everything better than us.",
  },
  {
    author: "John Carmack",
    quote:
      "Sometimes, the elegant implementation is a function. Not a method. Not a class. Not a framework. Just a function.",
  },
  {
    author: "Marvin Minsky",
    quote:
      "Artificial intelligence is the science of making machines do things that would require intelligence if done by men.",
  },
  {
    author: "Tim Berners-Lee",
    quote:
      "I just had to take the hypertext idea and connect it to the TCP and DNS ideas and — ta-da!— the World Wide Web.",
  },
  {
    author: "Hal Abelson",
    quote:
      "A computational process is indeed much like a sorcerer's idea of a spirit. It cannot be seen or touched. It is not composed of matter at all. However, it is very real. It can perform intellectual work. It can answer questions. It can affect the world by disbursing money at a bank or by controlling a robot arm in a factory.",
  },
  {
    author: "Fred Brooks",
    quote:
      "One must assume that there will be lots of bugs, and plan an orderly procedure for snaking them out.",
  },
  {
    author: "Fred Brooks",
    quote:
      "To achieve conceptual integrity, a design must proceed from one mind or a small group of agreeing minds.",
  },
  {
    author: "Tom DeMarco",
    quote:
      "The very best technology never has as much impact as girlfriend or boyfriend trouble.",
  },
  {
    author: "Fred Brooks",
    quote:
      "Maintenance cost is strongly affected by the number of users. More users find more bugs.",
  },
  {
    author: "Daniel T. Barry",
    quote: "Most errors are introduced during requirements specification!",
  },
  {
    author: "Harlan Mills",
    quote:
      "Programming is similar to a game of golf. The point is not getting the ball in the hole but how many strokes it takes.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "A number of studies have shown testing not very effective at finding bugs.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "The key to keeping software costs down is to write code that is easily modified.",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "The notions of correctness in mathematics and programs are different. A mathematical model must be consistent; it need not match reality (be correct), and it need not be complete (in the formal sense). A program model must be consistent; it must match reality; and it must be complete (in the sense that it reacts gracefully to all inputs).",
  },
  {
    author: "Daniel T. Barry",
    quote:
      "Programming is at least as difficult as developing a mathematical theory.",
  },
  {
    author: "Richard Stallman",
    quote:
      "In 1971 when I joined the staff of the MIT Artificial Intelligence lab, all of us who helped develop the operating system software, we called ourselves hackers. We were not breaking any laws, at least not in doing the hacking we were paid to do. We were developing software and we were having fun. Hacking refers to the spirit of fun in which we were developing software.",
  },
  {
    author: "Maurice Wilkes",
    quote:
      "By June 1949 people had begun to realize that it was not so easy to get programs right as at one time appeared.",
  },
  {
    author: "Butler Lampson",
    quote:
      "Everything should be made as simple as possible. But to do that you have to master complexity.",
  },
  {
    author: "Wayne Ratliff",
    quote:
      "If I had followed my heart instead of advice, dBASE would be much closer to perfection today.",
  },
  {
    author: "Wayne Ratliff",
    quote:
      "Programming is a little bit like the army. Now that I'm out, it's neat to have had the experience.",
  },
  {
    author: "Jonathan Sachs",
    quote:
      "I don't like using any tools or programs I didn't write myself or that I don't have some control over.",
  },
  {
    author: "Bob Frankston",
    quote:
      "If you cannot explain a program to yourself, the chance of the\ncomputer getting it right is pretty small.",
  },
  {
    author: "Gary Kildall",
    quote:
      "I don't comment on the code itself because I feel that properly written code is very much self-documented.",
  },
  {
    author: "Gary Kildall",
    quote:
      "When a program is clean and neat, nicely structured, and consistent, it can be beautiful.",
  },
  {
    author: "Douglas Crockford",
    quote:
      "JavaScript, purely by accident, has become the most popular programming language in the world.",
  },
  {
    author: "L. Peter Deutsch",
    quote:
      "Software is a discipline of detail, and that is a deep, horrendous fundamental problem with software.",
  },
  {
    author: "Gottfried Wilhelm Leibniz",
    quote:
      "Even in the games of children there are things to interest the greatest mathematician.",
  },
];

const rand = Math.floor(Math.random() * quotes.length);
const quote = quotes[rand];
document.getElementById("quote").innerText = quote.quote;
document.getElementById("author").innerText = quote.author;

var param = (p) => {
  var regex = new RegExp(
      "[?&]" + p.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)",
    ),
    results = regex.exec(window.location.href);
  if (!results || !results[2]) return null;
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

document.getElementById("user").innerHTML = param("user") ?? "$USER";
document.getElementById("uname").innerHTML = param("uname") ?? "sixzix-admin";
document.getElementById("hostname").innerHTML = param("hname") ?? "hippo";
document.getElementById("se").innerHTML = ` ${param("se") ?? "google"}.com`;

document.getElementById("search").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    var query = document.getElementById("search").value;
    const urlRegex =
      /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/\S*)?$/;
    if (urlRegex.test(query)) {
      if (!/^https?:\/\//i.test(query)) {
        query = "http://" + query;
      }
      window.location.href = query;
    } else {
      const searchQuery = encodeURIComponent(query);
      if (param("se") == "DDG" || param("se") == "duckduckgo") {
        window.location.href = `https://www.duckduckgo.com/` + searchQuery;
      } else {
        window.location.href =
          `https://www.${param("se") ?? "google"}.com/search?q=` + searchQuery;
      }
    }
  }
});
