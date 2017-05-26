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

u2 = User.create(
  username: "justin",
  email: "justin.macmillin@gmail.com",
  password: "password"
)

u3 = User.create(
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
  user_id: u2.id,
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

t7.art = File.open('app/assets/images/youth-lagoon-17')
t7.save!

t8 = Track.create(
  title: "The Gardener",
  artist: "The Tallest Man On Earth",
  user_id: t3.id,
  link: "https://www.youtube.com/watch?v=3RpBLwaEtrI"
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

t8.art = File.open('app/assets/images/the-gardener')
t8.save!

t7 = Track.create(
  title: "All My Days",
  artist: "Alexi Murdoch",
  user_id:  guest.id
  producers: "Alexi Murdoch",
  writers: "Alexi Murdoch",
  link: "https://www.youtube.com/watch?v=HjHvJE1XU7E"
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

t7.art = File.open('app/assets/images/all-my-days')
t7.save!

t9 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t9.art = File.open()
t9.save!

t10 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t10.art = File.open()
t10.save!

t11 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t11.art = File.open()
t11.save!

t12 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t12.art = File.open()
t12.save!

t13 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t13.art = File.open()
t13.save!

t14 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t14.art = File.open()
t14.save!

t15 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t15.art = File.open()
t15.save!

t16 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t16.art = File.open()
t16.save!

t17 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t17.art = File.open()
t17.save!

t18 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t18.art = File.open()
t18.save!

t19 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t19.art = File.open()
t19.save!

t20 = Track.create(
  title:
  artist:
  user_id:
  producers:
  writers:
  link:
  lyrics:
)

t20.art = File.open()
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
