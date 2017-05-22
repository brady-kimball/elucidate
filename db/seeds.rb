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

Annotation.destroy_all
a1 = Annotation.create(
  user_id: guest.id,
  track_id: t1.id,
  body: "It’s just kinda like, “It’s happening.” We can’t control it. We’re coming together, and nothing can stop us.",
  start_index: 494,
  end_index: 575
)

a2 = Annotation.create(
  user_id: guest.id,
  track_id: t1.id,
  body: "It’s kind of like the build up to the chorus. It starts out kinda chill, but it’s like, “This is starting to happen. I’m starting to really like you.” It’s not just, “Hey, you’re a nice girl sitting by the bar. I’m really liking where this is going and I’m starting to lose control of myself,” in a good sense of the word.",
  start_index: 624,
  end_index: 700
)
