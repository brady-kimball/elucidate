# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create(
  username: "user1",
  email: "user1@hotmail.com",
  # avatar: "app/assets/images/testAvatar.png",
  password: "password"
)

guest = User.create(
  username: "guest",
  email: "guest@junk.com",
  # avatar: "app/assets/images/default-avatar.png",
  password: "password"
)

justin = User.create(
  username: "justin10",
  email: "justin.macmillin@gmail.com",
  password: "password"
)

tom = User.create(
  username: "tom",
  email: "tom@gmail.com",
  password: "password"
)


Track.destroy_all

t1 = Track.create(
  title: "Despacito (Remix)",
  artist: "Luis Fonsi & Daddy Yankee",
  user_id: guest.id,
  lyrics: "[Intro: Justin Bieber]
Come and move that in my direction
So thankful for that, it's such a blessin', yeah
Turn every situation into heaven, yeah
Oh-oh, you are
My sunrise on the darkest day
Got me feelin' some kind of way
Make me wanna savor every moment slowly, slowly
You fit me tailor-made, love how you put it on
Got the only key, know how to turn it on
The way you nibble on my ear, the only words I wanna hear
Baby, take it slow so we can last long

[Verse 1: Luis Fonsi & Daddy Yankee]
¡Oh!
Tú, tú eres el imán y yo soy el metal
Me voy acercando y voy armando el plan
Sólo con pensarlo se acelera el pulso (oh yeah)
Ya, ya me está gustando más de lo normal
Todos mis sentidos van pidiendo más
Esto hay que tomarlo sin ningún apuro

[Coro: Justin Bieber & Luis Fonsi / Daddy Yankee]
Despacito
Quiero respirar tu cuello despacito
Deja que te diga cosas al oído
Para que te acuerdes si no estás conmigo
Despacito
Quiero desnudarte a besos despacito
Firmo en las paredes de tu laberinto
Y hacer de tu cuerpo todo un manuscrito
(Sube, sube, sube
Sube, sube)

[Bridge 1: Luis Fonsi & Daddy Yankee]
Quiero ver bailar tu pelo, quiero ser tu ritmo (woah, woah)
Que le enseñes a mi boca (woah, woah)
Tus lugares favoritos (favorito, favorito, baby)
Déjame sobrepasar tus zonas de peligro (woah, woah)
Hasta provocar tus gritos (woah, woah)
Y que olvides tu apellido

[Verse 2: Daddy Yankee]
Si te pido un beso, ven, dámelo, yo sé que estás pensándolo
Llevo tiempo intentándolo, mami, esto es dando y dándolo
Sabes que tu corazón conmigo te hace bang-bang
Sabes que esa beba está buscando de mi bang-bang
Ven, prueba de mi boca para ver cómo te sabe
Quiero, quiero, quiero ver cuánto amor a ti te cabe
Yo no tengo prisa, yo me quiero dar el viaje
Empecemos lento, después salvaje

[Bridge 2: Daddy Yankee & Justin Bieber / Daddy Yankee]
Pasito a pasito, suave suavecito
Nos vamos pegando, poquito a poquito
Cuando tú me besas con esa destreza
Veo que eres malicia con delicadeza
Pasito a pasito, suave suavecito
Nos vamos pegando, poquito a poquito
Y es que esa belleza es un rompecabezas
Pero pa' montarlo aquí tengo la pieza
¡Oye!

[Coro: Justin Bieber & Luis Fonsi / Daddy Yankee]
Despacito
Quiero respirar tu cuello despacito
Deja que te diga cosas al oído
Para que te acuerdes si no estás conmigo
Despacito
Quiero desnudarte a besos despacito
Firmo en las paredes de tu laberinto
Y hacer de tu cuerpo todo un manuscrito
(Sube, sube, sube
Sube, sube)

[Bridge 1: Luis Fonsi & Daddy Yankee]
Quiero ver bailar tu pelo, quiero ser tu ritmo (woah, woah)
Que le enseñes a mi boca (woah, woah)
Tus lugares favoritos (favorito, favorito, baby)
Déjame sobrepasar tus zonas de peligro (woah, woah)
Hasta provocar tus gritos (woah, woah)
Y que olvides tu apellido

[Verse 3: Luis Fonsi]
Despacito
This is how we do it down in Puerto Rico
I just wanna hear you screaming, '¡Ay, Bendito!'
I can move forever cuando esté contigo
¡Bailalo!

[Bridge 3: Daddy Yankee, Luis Fonsi & Justin Bieber]
Pasito a pasito, suave suavecito
Nos vamos pegando, poquito a poquito
Que le enseñes a mi boca
Tus lugares favoritos
(Favorito, favorito, baby)
Pasito a pasito, suave suavecito
Nos vamos pegando, poquito a poquito
Hasta provocar tus gritos (Fonsi)
Y que olvides tu apellido (D.Y.)",
  writers: 	"Luis Rodríguez Erika Ender Ramón Ayala",
  producers: "Josh Gudwin, Mauricio Rengífo & Andrés Torres",
  editors: "Somebody else",
  link: "https://www.youtube.com/watch?v=RnTwrCXEp1I",
)

t1.art = File.open('app/assets/images/despacito.jpg')
t1.save!

t2 = Track.create(
  title: "Sign of the Times",
  artist: "Harry Styles",
  producers: "Alex Salibian, Jeff Bhasker, and Tyler Johnson",
  writers: "Alex Salibian, Jeff Bhasker, and Harry Styles",
  link: "https://www.youtube.com/watch?v=qN4ooNx77u0",
  user_id: guest.id,
  lyrics: "[Verse 1]
Just stop your crying, it's a sign of the times
Welcome to the final show
Hope you're wearing your best clothes
You can't bribe the door on your way to the sky
You look pretty good down here
But you ain't really good

[Pre-Chorus]
We never learn, we been here before
Why are we always stuck and running from
The bullets? The bullets?
We never learn, we been here before
Why are we always stuck and running from
The bullets? The bullets?

[Chorus]
Just stop your crying, it's a sign of the times
We gotta get away from here
We gotta get away from here
Just stop your crying, it'll be alright
They told me that the end is near
We gotta get away from here

[Verse 2]
Just stop your crying, have the time of your life
Breaking through the atmosphere
And things are pretty good from here
Remember everything will be alright
We can meet again somewhere
Somewhere far away from here

[Pre-Chorus]
We never learn, we been here before
Why are we always stuck and running from
The bullets? The bullets?
We never learn, we been here before
Why are we always stuck and running from
The bullets? The bullets?

[Chorus]
Just stop your crying, it's a sign of the times
We gotta get away from here
We gotta get away from here
Stop your crying, baby, it'll be alright
They told me that the end is near
We gotta get away from here

[Pre-Chorus]
We never learn, we been here before
Why are we always stuck and running from
The bullets? The bullets?
We never learn, we been here before
Why are we always stuck and running from
The bullets? The bullets?

[Bridge]
We don't talk enough, we should open up
Before it's all too much
Will we ever learn? We've been here before
It's just what we know

[Outro]
Stop your crying, baby, it's a sign of the times
We gotta get away, we got to get away
We got to get away, we got to get away
We got to get away
We got to, we got to run
We got to, we got to run
We got to, we got to run"
)

t2.art = File.open('app/assets/images/signofthetimes.jpg')
t2.save!

t3 = Track.create(
  title: "Believer",
  artist: "Imagine Dragons",
  writers: "Ben McKee, Daniel Platzman, and Dan Reynolds",
  user_id: guest.id,
  producers: "Mattman and Robin",
  link: "https://www.youtube.com/watch?v=IhP3J0j9JmY",
  lyrics: "[Verse 1]
First things first
I'ma say all the words inside my head
I'm fired up and tired of the way that things have been, oh-ooh
The way that things have been, oh-ooh
Second thing second
Don't you tell me what you think that I can be
I'm the one at the sail, I'm the master of my sea, oh-ooh
The master of my sea, oh-ooh

[Pre-Chorus]
I was broken from a young age
Taking my sulking to the masses
Writing my poems for the few
That looked at me took to me, shook to me, feeling me
Singing from heart ache from the pain
Take up my message from the veins
Speaking my lesson from the brain
Seeing the beauty through the...

[Chorus]
Pain!
You made me a, you made me a believer, believer
Pain!
You break me down, you build me up, believer, believer
Pain!
I let the bullets fly, oh let them rain
My life, my love, my drive, it came from...
Pain!
You made me a, you made me a believer, believer

[Verse 2]
Third things third
Send a prayer to the ones up above
All the hate that you've heard has turned your spirit to a dove, oh-ooh
Your spirit up above, oh-ooh

[Pre-Chorus 2]
I was choking in the crowd
Living my brain up in the cloud
Falling like ashes to the ground
Hoping my feelings, they would drown
But they never did, ever lived, ebbing and flowing
Inhibited, limited
Till it broke open and it rained down
It rained down, like...

[Chorus]
Pain!
You made me a, you made me a believer, believer
Pain!
You break me down, you built me up, believer, believer
Pain!
I let the bullets fly, oh let them rain
My life, my love, my drive, it came from...
Pain!
You made me a, you made me a believer, believer

[Bridge]
Last things last
By the grace of the fire and the flames
You're the face of the future, the blood in my veins, oh-ooh
The blood in my veins, oh-ooh
But they never did, ever lived, ebbing and flowing
Inhibited, limited
Till it broke open and it rained down
It rained down, like...

[Chorus]
Pain!
You made me a, you made me a believer, believer
Pain!
You break me down, you built me up, believer, believer
Pain!
I let the bullets fly, oh let them rain
My life, my love, my god, it came from...
Pain!
You made me a, you made me a believer, believer"
)

t3.art = File.open('app/assets/images/imagine.jpg')
t3.save!

t4 = Track.create(
  title: "Bohemian Rhapsody",
  artist: "Queen",
  user_id: guest.id,
  writers: "Freddie Mercury",
  producers: "Roy Thomas Baker and Queen",
  link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  lyrics: "[Intro]
Is this the real life? Is this just fantasy?
Caught in a landslide, no escape from reality
Open your eyes, look up to the skies and see
I'm just a poor boy, I need no sympathy
Because I'm easy come, easy go, little high, little low
Any way the wind blows doesn't really matter to me, to me

[Verse 1]
Mama, just killed a man
Put a gun against his head, pulled my trigger, now he's dead
Mama, life had just begun
But now I've gone and thrown it all away
Mama, ooh, didn't mean to make you cry
If I'm not back again this time tomorrow
Carry on, carry on as if nothing really matters

[Verse 2]
Too late, my time has come
Sends shivers down my spine, body's aching all the time
Goodbye, everybody, I've got to go
Gotta leave you all behind and face the truth
Mama, ooh, (any way the wind blows)
I don't want to die
I sometimes wish I'd never been born at all

[Guitar Solo]

[Verse 3]
I see a little silhouetto of a man
Scaramouche, Scaramouche, will you do the Fandango?
Thunderbolt and lightning, very, very fright'ning me
(Galileo.) Galileo. (Galileo.) Galileo. Galileo figaro magnifico
I'm just a poor boy, nobody loves me
He's just a poor boy from a poor family
Spare him his life from this monstrosity
Easy come, easy go, will you let me go?
Bismillah! No, we will not let you go
(Let him go!) Bismillah! We will not let you go
(Let him go!) Bismillah! We will not let you go
(Let me go.) Will not let you go
(Let me go.) Will not let you go. (Let me go.) Ah
No, no, no, no, no, no, no
(Oh mamma mia, mamma mia) Mamma mia, let me go
Beelzebub has a devil put aside for me, for me, for me!

[Verse 4]
So you think you can stone me and spit in my eye?
So you think you can love me and leave me to die?
Oh, baby, can't do this to me, baby!
Just gotta get out, just gotta get right outta here!

[Outro]
Nothing really matters, anyone can see
Nothing really matters
Nothing really matters to me
Any way the wind blows"
)

t4.art = File.open('app/assets/images/bohemian.jpg')
t4.save!

t5 = Track.create(
  title: "Bullets",
  artist: "Tunng",
  user_id: guest.id,
  producers: "Mike Lindsay",
  writers: "Tunng",
  link: "https://www.youtube.com/watch?v=AI1NgFYJCN4",
  lyrics: "Green hills and enemies
These things, they make us sentimental inside
Your words are gelignite
Or just another sentimental aside

We're catching bullets in our teeth
And though it's easy if you know how it's done
They split the secret up six ways
Before they gave it to us just before dawn
And now we don't remember

Our blood and guts are out
We spread our bones across the table at night
We cut our fingers off
To give ourselves those little extra insights

We're catching bullets in our teeth
And though they try hard not to say how it's done
They always do
They spill the secret out six ways
And beg for our forgiveness just before dawn
And now we don't remember

We're catching bullets in our teeth
It's hard to do but they taste sweet
And if they take a couple out
We'll try to work things out
We're catching bullets with our heads
And hearts and all the darkest parts of us
It's strange to find such light
In such endless night

So sweet to lose a friend
You leave the church and taste the air in your lungs
Old lies and fireflies
Carve angels on your eyes, and all is undone

You whisper prayers into the dark
Up to a god in whom you've never believed
You always do
You split the secret up six ways
But it won't make it any easier to see
And now we don't remember

We're catching bullets in our teeth
It's hard to do but they're so sweet
And if they take a couple out
We try to work things out
We're catching bullets with our heads
And hearts and all the darkest parts of us
It's strange to find such light
In such endless night

We're catching bullets in our backs
We sent the undertaker back
Into the garden in the drought
To try to work things out
We're catching bullets with the best
Resources that we've got
We're happy, then again, we're not
We shout through the endless doubt"
)

t6 = Track.create(
  title: "Don't Stop Me Now",
  artist: "Queen",
  user_id: guest.id,
  producers: "Roy Thomas Baker and Queen",
  writers: "Freddie Mercury",
  link: "https://www.youtube.com/watch?v=HgzGwKwLmgM",
  lyrics: "[Intro]
Tonight I'm going to have myself a real good time
I feel alive
And the world I'll turn it inside out, yeah
And floating around in ecstasy
So don't stop me now
Don't stop me
Cause I'm having a good time
Having a good time

[Verse 1]
I'm a shooting star leaping through the sky
Like a tiger defying the laws of gravity
I'm a racing car passing by like Lady Godiva
I'm going to go go go
There's no stopping me

[Pre-Chorus]
I'm burning through the sky yeah
Two hundred degrees
That's why they call me Mister Fahrenheit
I'm traveling at the speed of light
I want to make a supersonic man out of you

[Chorus]
Don't stop me now I'm having such a good time
I'm having a ball
Don't stop me now
If you want to have a good time just give me a call
Don't stop me now (because I'm having a good time)
Don't stop me now (Yes I'm having a good time)
I don't want to stop at all

[Verse 2]
Yeah, I'm a rocket ship on my way to Mars
On a collision course
I am a satellite I'm out of control
I am a sex machine ready to reload
Like an atom bomb about to
Oh oh oh oh oh explode

[2nd Pre-Chorus]
I'm burning through the sky yeah
Two hundred degrees
That's why they call me Mister Fahrenheit
I'm traveling at the speed of light
I want to make a supersonic woman of you

[Pre-Chorus]
I'm burning through the sky yeah
Two hundred degrees
That's why they call me Mister Fahrenheit
I'm traveling at the speed of light
I want to make a supersonic man out of you

[Chorus]
Don't stop me now I'm having such a good time
I'm having a ball
Don't stop me now
If you want to have a good time just give me a call
Don't stop me now (because I'm having a good time)
Don't stop me now (Yes I'm having a good time)
I don't want to stop at all
Don't stop me now I'm having such a good time
I'm having a ball
Don't stop me now
If you want to have a good time just give me a call
Don't stop me now (because I'm having a good time)
Don't stop me now (Yes I'm having a good time)
I don't want to stop at all"
)


t7 = Track.create(
  title: "17",
  artist: "Youth Lagoon",
  user_id: justin.id,
  producers: "Jeremy Park and Trevor Powers",
  link: "https://www.youtube.com/watch?v=b4_x063rhX4",
  lyrics: "Roaming the campground out by the lake where we swam
We were hunting for snakes
But we couldn't find them
Surrounded by nothing
But the nothing's surrounded by us
But it's just me in my room
With my eyes shut

When I was seventeen
My mother said to me
'Don't stop imagining. The day that you do is the day that you die.'
Now I pull a wanton carriage
Instead of the horses, grazing the lawn
I was having fun
We were all having fun

My brain can think faster than I can
I'm not fast enough
Who is there to talk to
That won't lock me up?
At least God doesn't judge me by the thoughts that aren't mine
The snakes I couldn't find
I don't want to find

When I was seventeen
My mother said to me
'Don't stop imagining. The day that you do is the day that you die.'
Now I pull a one ton carriage
Instead of the horses, grazing the lawn
I was having fun
We were all having fun
When I was seventeen
My mother said to me
'Don't stop imagining. The day that you do is the day that you die.'
Now I pull a one ton carriage
Instead of the horses, grazing the lawn
I was having fun
We were all having fun"
)

t7.art = File.open('app/assets/images/youth-lagoon-17.jpg')
t7.save!

t8 = Track.create(
  title: "The Gardener",
  artist: "The Tallest Man On Earth",
  user_id: tom.id,
  link: "https://www.youtube.com/watch?v=3RpBLwaEtrI",
  lyrics: "I sense a runner in the garden
Although my judgements known to fail
Once built a steamboat in a meadow
Cause I'd forgotten how to sail

I know the runner's going to tell you
There ain't no cowboy in my hair
So now he's buried by the daisies
So I could stay the tallest man in your eyes, babe

I sense a spy up in the chimney
From all the evidence I've burned
I guess he'll read it in the smoke now
And soon to ashes I'll return

I know the spy is going to tell you
It's not my flag up in the pole
So now he's buried by the lilies
So I could stay forever more in your eyes, babe

I sense a leak inside my phone now
From all the lies I have told
I know he has your private number
And soon he'll make that vicious call

I know the leak is going to tell you
There ain't now puppy on your leash
So now he'll fertilize the roses
So I could stay the king you see
In your eyes, babe
In your eyes, babe

So now we're dancing through the garden
And what a garden I have made
And now that death will grow my jasmine
I find it soothing I'm afraid

Now there is no need for suspicion
There ain't no frog kissing your hand
I won't be lying when I tell you
That I'm a Gardener
I'm a man
In your eyes, babe
In your eyes, babe
In your eyes, babe
In your eyes, babe"
)

t8.art = File.open('app/assets/images/the-gardener.jpg')
t8.save!

t7 = Track.create(
  title: "All My Days",
  artist: "Alexi Murdoch",
  user_id:  guest.id,
  producers: "Alexi Murdoch",
  writers: "Alexi Murdoch",
  link: "https://www.youtube.com/watch?v=HjHvJE1XU7E",
  lyrics: "[Verse 1]
Well I have been searching all of my days
All of my days
Many a road, you know
I've been walking on
All of my days
And I've been trying to find
What's been in my mind
As the days keep turning into night

[Verse 2]
Well I have been quietly standing in the shade
All of my days
Watch the sky breaking on the promise that we made
All of this rain
And I've been trying to find
What's been in my mind
As the days keep turning into night

[Verse 3]
Well many a night I found myself with no friends standing near
All of my days
I cried aloud
I shook my hands
What am I doing here
All of these days
For I look around me
And my eyes confound me
And it's just too bright
As the days keep turning into night

[Verse 4]
Now I see clearly
It's you I'm looking for
All of my days
Soon I'll smile
I know I'll feel this loneliness no more
All of my days
For I look around me
And it seems you've found me
And it's coming into sight

[Outro]
As the days keep turning into night
As the days keep turning into night
And even breathing feels all right
Yes, even breathing feels all right
Now even breathing feels all right
It's even breathing
Feels all right"
)

t7.art = File.open('app/assets/images/all-my-days.jpg')
t7.save!

wilhelm = Track.create(
  title: "The Wilhelm Scream",
  artist: "James Blake",
  user_id: guest.id,
  producers: "James Blake",
  writers: "James Blake",
  link: "https://www.youtube.com/watch?v=isIABK-0ohQ",
  lyrics: "I don't know about my dreams
I don't know about my dreaming anymore
All that I know is
I'm falling, falling, falling, falling
Might as well fall in

I don't know about my love
I don't know about my loving anymore
All that I know is
I'm falling, falling, falling, falling
Might as well fall in"
)

t9.art = File.open('app/assets/images/wilhelm-scream.jpg')
t9.save!

t10 = Track.create(
  title: "Broadripple is Burning",
  artist: "Margot & the Nuclear So and So's",
  user_id: justin.id,
  link: "https://www.youtube.com/watch?v=WXTVDUYIZs8",
  lyrics: "Children
Broadripple is burning
And the girls are getting sick
Off huffing glue up in the bathroom
While their boyfriends pick up chicks

And darling, I'm lost
I heard you whispering that night in Fountain Square
The trash-filled streets made me wish we were headed home

And there was love inside the basement
Where that woman used to lie
In a sleeping bag we shared upon
The floor most every night
And darling, I'm drunk
And everything I that I have loved has turned to stone
So pack your bags
And come back home

And I'm wasted
You can taste it
Don't look at me that way
Cause I'll be hanging from a rope
I will haunt you like a ghost

And if my woman was a fire
She'd burn out before I wake
And be replaced by pints of whiskey
Cigarettes and outer space
Then somebody moves
And everything you thought you had has gone to shit
But we've got a lot
Don't ever forget that

And I wrote this on an airplane
Where the people looked like ants
And when a woman that you loved is gone
She's bombing east Japan

Don't fucking move
Cause everything you think you have will go to shit
But we've got a lot
Don't you dare forget that

And I'm wasted
You can taste it
Don't look at me that way
Cause I'll be hanging from a rope
I will haunt you like a ghost

And I'm wasted
You can taste it
Don't look at me that way
Cause I'll be hanging from a rope
I will haunt you like a ghost"
)

t10.art = File.open("app/assets/images/broadripple.jpg")
t10.save!

t11 = Track.create(
  title: "The Wrote and the Writ",
  artist: "Johnny Flynn",
  user_id: guest.id,
  link: "https://www.youtube.com/watch?v=tFCbacVw94Q",
  lyrics: "They're taking pictures of the man from God
I hope his cassock's clean
The burden of being our holy fellas
Your halo'd better gleam, better gleam

What of all those wayward priests?
The ones who like to drink
Do you suppose they'd swap their blood for wine
Like you swapped yours for ink, for ink

You wrote me oh so many letters
And all of them seemed true
Promises look good on paper
Especially from you, from you

The weight of all those willing words
I carried all alone
You wouldn't put your pen to bed
When we hadn't found our own, our own

Your sentences rose high at night
And circled round my head
The circle's since been broken
Like the priest before me is breaking bread

I'm being asked to drink the blood of Christ
And soon I'll eat his flesh
I'm alone again before the altar
Shedding all my old regrets

The last of which I'll tell you now
As it flies down the sink
I never knew a part of you
You didn't set in ink, in ink

The letters that you left behind
No longer shall I read
Your blood's between the pages
And I can't stand to see you bleed

And I'll soon forget what was never there
Your words are ash and dust
All that's left is the song I've sung
The breath I've taken and the one I must

If you're born with a love for the wrote and the writ
People of letters your warning stands clear
Pay heed to your heart and not to your wit
Don't say in a letter what you can't in my ear"
)

t11.art = File.open('app/assets/images/wrote-writ.jpg')
t11.save!

t12 = Track.create(
  title: "Furr",
  artist: "Blitzen Trapper",
  user_id: justin.id,
  link: "https://www.youtube.com/watch?v=CmBgxP56R1I",
  lyrics: "[Verse 1]
Yeah, when I was only seven-teen,
I could hear the angels whisper-ing
So I drove into the woods,
And wandered aimlessly about
Till I heard my mother shouting through the fog
It turned out to be the howling of a dog
Or a wolf to be exact.
The sound sent shivers down my back
But I was drawn into the pack.
And before long,
They allowed me to join in and sing their song.
So from the cliffs and highest hill,
Yeah, we would gladly get our fill,
Howling endlessly and shrilly at the dawn.
And I lost the taste for judging right from wrong.
For my flesh had turned to fur,
Yeah, and my thoughts, they surely were
Turned to instinct and obedience to God.

[Chorus]
You can wear your fur
Like a river on fire.
But you better be sure
If you're makin' God a liar.
I'm a rattlesnake, babe,
I'm like fuel on fire.
So if you're gonna' get made,
Don't be afraid of what you've learned.

[Verse 2]
On the day that I turned twenty-three,
I was curled up underneath a dogwood tree.
When suddenly a girl
With skin the color of a pearl,
She wandered aimlessly,
But she didn't seem to see.
She was listenin' for the angels just like me.
So I stood and looked about.
I brushed the leaves off of my snout.
And then I heard my mother shouting through the trees.
You should have seen that girl go shaky at the knees.
So I took her by the arm
We settled down upon a farm.
And raised our children up as gently as you please.

[Pre-Chorus]
Now my fur has turned to skin.
And I've been quickly ushered in
To a world that I confess I do not know.
But I still dream of runnin' careless through the snow.
Through the howlin' winds that blow,
Across the ancient distant flow,
It fill our bodies up like water till we know.

[Chorus]
You can wear your fur
Like a river on fire.
But you better be sure
If you're makin' God a liar.
I'm a rattlesnake, babe,
I'm like fuel on fire.
So if you're gonna' get made,
Don't be afraid of what you've learned."
)

t12.art = File.open('app/assets/images/furr.jpg')
t12.save!

t13 = Track.create(
  title: "Stay Alive",
  artist: "José González",
  user_id: guest.id,
  writers: "José González",
  link: "https://www.youtube.com/watch?v=NucJk8TxyRg",
  lyrics: "[Refrain]
There’s a rhythm in rush these days
Where the lights don’t move and the colors don’t fade
Leaves you empty with nothing but dreams
In a world gone shallow
In a world gone mean

[Verse 1]
Sometimes there’s things a man cannot know
Gears won’t turn and the leaves won’t grow
There’s no place to run and no gasoline
Engine won’t turn
And the train won’t leave
Engines won’t turn and the train won’t leave

[Break 1]
I will stay with you tonight
Hold you close ‘til the morning light
In the morning watch a new day rise
We’ll do whatever just to stay alive
We’ll do whatever just to stay alive

[Verse 2]
Well the way I feel is the way I write
Nothing like the thoughts of the man who lies
There is a truth and it’s on our side
Dawn is coming
Open your eyes
Look into the sun as the new days rise

[Break 2]
And I will wait for you tonight
You’re here forever and you’re by my side
I’ve been waiting all my life
To feel your heart as it’s keeping time
We’ll do whatever just to stay alive

[Bridge]
Dawn is coming
Open your eyes
Dawn is coming
Open your eyes
Dawn is coming
Open your eyes
Dawn is coming
Open your eyes
Look into the sun as the new days rise

[Refrain]
There’s a rhythm in rush these days
Where the lights don’t move and the colors don’t fade
Leaves you empty with nothing but dreams
In a world gone shallow
In a world gone mean

[Outro]
But there is a truth and it’s on our side
Dawn is coming
Open your eyes
Look into the sun as a new days rise"
)

t13.art = File.open('app/assets/images/stay-alive.jpg')
t13.save!

t14 = Track.create(
  title: "Pink Moon",
  artist: "Nick Drake",
  user_id: justin.id,
  producers: "John Wood",
  link: "https://www.youtube.com/watch?v=aXnfhnCoOyo",
  lyrics: "[Verse]
Saw it written and I saw it say
Pink moon is on its way
And none of you stand so tall
Pink moon gonna get ye all

[Chorus]
And it's a pink moon
Yes, a pink moon

Pink, pink, pink, pink
Pink moon
Pink, pink, pink, pink
Pink moon

[Verse]
I saw it written and I saw it say
Pink moon is on its way
And none of you stand so tall
Pink moon gonna get ye all

[Chorus]
And it's a pink moon
Yes, a pink moon"
)

t14.art = File.open('app/assets/images/pink-moon.jpg')
t14.save!

t15 = Track.create(
  title: "Coffins",
  artist: "Misterwives",
  user_id: u1.id,
  producers: "Frequency",
  link: "https://www.youtube.com/watch?v=gv014RiqUio",
  lyrics: "[Verse 1]
I gave my hand for you to hold
I gave my love that you went and sold
Exchanged our song for another
Can’t blame this sad flame that once glowed like no other

[Chorus]
How do you soften
The thought of carrying coffins?
We were so alive
Only to see us wither and die

[Verse 2]
You say you’d stand even if it should all fall
You’re yearning, yielded when you hit the wall
I shut your ears, tried to make you hear my call
But you were long gone, no hope in a sunless dawn

[Chorus 2]
How do you soften
The thought of carrying coffins?
We were so alive
Only to see us wither and die
Oh, why must soil run dry?

[Bridge]
And I never ever thought I’d hear these words be said
Now I lay here in my unmade bed
Empty stomachs unable to be fed
Your ego swallowed you and from there you fled
So far away
Could not find your way back
Walked down the path
Where feet slipped through the cracks
Where feet slipped through the cracks
Could not find your way back
Where feet slipped through the cracks
Could not find your way back

[Chorus 2]"
)

t15.art = File.open('app/assets/images/coffins.png')
t15.save!

t16 = Track.create(
  title: "Bright Whites",
  artist: "Kishi Bashi",
  user_id: justin.id,
  writers: "Kishi Bashi",
  link: "https://www.youtube.com/watch?v=6wcZb80f5VE",
  lyrics: "Keya keya sorya douse ne
Keya keya sorya douse dame da
Yamerarenai yamerarenai
Douse damedakedo yamerarenai ne
Keya keya sorya douse ne
Keya keya sorya douse dame da
Taerarenai taerarenai
Douse damedakedo taerarenai ne

[Verse 1 - Kishi Bashi]
You and me at the edge of the world
With a pretty little smile for me to see, for me to see
New bright whites and a cage full of ice
And a naked little canopy to feed my disease

[Pre-Chorus 1 - Kishi Bashi]
And if you're to smile at me
I could cry by land or sea

[Chorus 1- Kishi Bashi]
After you said that you like Big Red
I opened up my mind and skipped a beat
Cufflinks and hands in wrong places and faces
And creepy little movies made me weep

[Pre-Chorus 2 - Kishi Bashi]
And if you're to say to me
What is mine is yours to keep

[Bridge - Kishi Bashi]
Well you know, I'll have to see
If all the stars aligned we could've solved the mystery
It's a partial fantasy
We're living in a land that went astray from history

[Verse 1 - Kishi Bashi]
You and me at the edge of the bed
Looking at the faded pictures for you to see and me to see
Murder and colonies, land without rivers
Raging in the middle of some sad destiny

[Pre-Chorus 3 - Kishi Bashi]
Take one look to find my eyes
Safety's in your inner thigh

[Bridge - Kishi Bashi]
Well you know, I'll have to see
If all the stars aligned we could have solved the mystery
It's a partial fantasy
We're living in a land that went astray from history"
)

t16.art = File.open('app/assets/images/bright-whites.jpg')
t16.save!

t17 = Track.create(
  title: "In the Air Tonight",
  artist: "Phil Collins",
  user_id: guest.id,
  producers: "Hugh Padgham & Phil Collins",
  link: "https://www.youtube.com/watch?v=YkADj0TPrJA",
  lyrics: "[Chorus]
I can feel it coming in the air tonight, oh Lord
I've been waiting for this moment for all my life, oh Lord
Can you feel it coming in the air tonight, oh Lord, oh Lord

[Verse 1]
Well, if you told me you were drowning
I would not lend a hand
I've seen your face before my friend
But I don't know if you know who I am
Well, I was there and I saw what you did
I saw it with my own two eyes
So you can wipe off the grin, I know where you've been
It's all been a pack of lies

[Chorus]
And I can feel it coming in the air tonight, oh Lord
Well I’ve been waiting for this moment for all my life, oh Lord
I can feel it coming in the air tonight, oh Lord

[Verse 2]
Well I remember, I remember don't worry
How could I ever forget, it's the first time, the last time we ever met
But I know the reason why you keep your silence up, no you don't fool me
The hurt doesn't show; but the pain still grows
It's no stranger to you or me

[Chorus]
And I can feel it coming in the air tonight, Oh Lord
Well, I've been waiting for this moment all my life, Oh Lord
Oh Lord"
)

t17.art = File.open('app/assets/images/phil.jpg')
t17.save!

t18 = Track.create(
  title: "Father Figure",
  artist: "George Michael",
  user_id: guest.id,
  producers: "George Michael",
  link: "https://www.youtube.com/watch?v=m_9hfHvQSNo",
  lyrics: "That's all I wanted
Something special, someone sacred in your eyes
For just one moment
To be bold and naked at your side
Sometimes I think that you'll never understand me
Maybe this time is forever, say it can be, whoa

That's all you wanted
Somethin' special, someone sacred in your life
Just for one moment, to be warm and naked at my side
Sometimes I think that you'll never understand me
But somethin' tells me together, we'd be happy, whoa baby

I will be your father figure
Put your tiny hand in mine
I will be your preacher teacher
Anything you have in mind
I will be your father figure
I have had enough of crime
I will be the one who loves you
'Til the end of time

That's all I wanted
But sometimes love can be mistaken for a crime
That's all I wanted
Just to see my baby's blue eyes shine
This time I think that my lover understands me
If we have faith in each other then we can be strong

(Chorus)

If you are the desert, I'll be the sea
If you ever hunger, hunger for me
Whatever you ask for, that's what I'll be
So when you remember the ones who have lied
Who said that they cared but then
Laughed as you cried
Beautiful darling, don't think of me
Because all I ever wanted
It's in your eyes baby (baby)
And love can't lie, no
Greet me with the eyes of a child
My love is always tellin' me so
Heaven is a kiss and a smile
Just hold on, hold on
I won't let you go, my baby

(Chorus)

I will be your father (I will be your)
I will be your (father) preacher teacher
I will be your (I'll be your daddy, oh)
I will be the one who loves you
'Til the end of time"
)

t18.art = File.open('app/assets/images/father-figure.jpg')
t18.save!

t19 = Track.create(
  title: "This Must Be the Place (Naive Melody)",
  artist: "Talking Heads",
  user_id: guest.id,
  producers: "Talking Heads & David Byrne",
  link: "https://www.youtube.com/watch?v=CMPIxEWGs5g",
  lyrics: "[Verse 1]
Home is where I want to be
Pick me up and turn me round
I feel numb, born with a weak heart
I guess I must be having fun
The less we say about it, the better
Make it up as we go along
Feet on the ground, head in the sky
It's okay, I know nothing's wrong, nothing

[Chorus]
Hi-yeah, I got plenty of time
Hi-yeah, you got light in your eyes
And you're standing here beside me
I love the passing of time
Never for money, always for love
Cover up and say goodnight, say goodnight

[Verse 2]
Home is where I want to be
But I guess I'm already there
I come home, she lifted up her wings
I guess that this must be the place
I can't tell one from the other
Did I find you or you find me?
There was a time before we were born
If someone asks, this is where I'll be, where I'll be

[Chorus]
Hi-yeah, we drift in and out
Hi-yeah, sing into my mouth
Out of all those kinds of people
You got a face with a view
I'm just an animal looking for a home
Share the same space for a minute or two
And you love me 'til my heart stops
Love me 'til I'm dead
Eyes that light up, eyes look through you
Cover up the blank spots, hit me on the head, ah-ooh"
)

t19.art = File.open('app/assets/images/naive.png')
t19.save!

t20 = Track.create(
  title: "Walk Like an Egyptian",
  artist: "The Bangles",
  user_id: tom.id,
  producers: "David Kahne",
  link: "https://www.youtube.com/watch?v=Cv6tuzHUuuk",
  lyrics: "All the old paintings on the tomb
They do the sand dance, don't you know?
If they move too quick (oh-way-oh)
They're falling down like a domino

All the bazaar men by the Nile
They got the money on a bet
Gold crocodiles (oh-way-oh)
They snap their teeth on your cigarette

Foreign types with the hookah pipes say
(Way-oh-way-oh, ooh-way-oh-way-oh)
Walk like an Egyptian

The blonde waitresses take their trays
They spin around and they cross the floor
They've got the moves (oh-way-oh)
You drop your drink, then they bring you more

All the school kids so sick of books
They like the punk and the metal band
When the buzzer rings (oh-way-oh)
They're walking like an Egyptian

All the kids in the marketplace say
(Way-oh-way-oh, ooh-way-oh-way-oh)
Walk like an Egyptian

Slide your feet up the street, bend your back
Shift your arm, then you pull it back
Life is hard you know (oh-way-oh)
So strike a pose on a Cadillac

If you want to find all the cops
They're hanging out in the donut shop
They sing and dance (oh-way-oh)
They spin the clubs, cruise down the block

All the Japanese with their yen
The party boys call the Kremlin
And the Chinese know (oh-way-oh)
They walk the line like Egyptian

All the cops in the donut shop say
(Way-oh-way-oh, ooh-way-oh-way-oh)
Walk like an Egyptian
Walk like an Egyptian"
)

t20.art = File.open('app/assets/images/walk.jpg')
t20.save!


AnnotationContainer.destroy_all
a1 = AnnotationContainer.create(
  track_id: t1.id,
  start_index: 494,
  end_index: 575
)

a2 = AnnotationContainer.create(
  track_id: t1.id,
  start_index: 624,
  end_index: 700
)

a3 = AnnotationContainer.create(
  track_id: t2.id,
  start_index: 11,
  end_index: 150
)

a4 = AnnotationContainer.create(
  track_id: wilhelm.id,
  start_index: 0,
  end_index: 147
)

Annotation.destroy_all

a11 = Annotation.create(
  annotation_container_id: a1.id,
  user_id: guest.id,
  body: "It’s just kinda like, “It’s happening.” We can’t control it. We’re coming together, and nothing can stop us.",
)

a12 = Annotation.create(
  annotation_container_id: a1.id,
  user_id: u1.id,
  body: "It's a reference to daddy yankee's first tour"
)

a21 = Annotation.create(
  annotation_container_id: a2.id,
  user_id: guest.id,
  body: "It’s kind of like the build up to the chorus. It starts out kinda chill, but it’s like, “This is starting to happen. I’m starting to really like you.” It’s not just, “Hey, you’re a nice girl sitting by the bar. I’m really liking where this is going and I’m starting to lose control of myself,” in a good sense of the word.",
)

a31 = Annotation.create(
  annotation_container_id: a3.id,
  user_id: u1.id,
  body: "“Final show” suggests death, and “best clothes” indicates the following events occur at—or are the result of—a funeral, since the dead are traditionally buried in their finest attire."
)

wil_a1 = Annotation.create(
  annotation_container_id: a4.id
)

Comment.destroy_all

c1 = Comment.create(
  user_id: guest.id,
  annotation_id: a11.id,
  body: "This guy knows what he's talking about!"
)

c2 = Comment.create(
  user_id: u1.id,
  annotation_id: a11.id,
  body: "No way!"
)

c3 = Comment.create(
  user_id: u1.id,
  annotation_id: a31.id,
  body: "Ehhh it's a reach"
)
