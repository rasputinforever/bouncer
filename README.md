# bouncer
Bouncing Bouncer Game


** Iniitial Ideas
Bouncing Component is always bouncing. Try to make this motion as natural as possible looking (de/acceleration up/down, maybe use some physics formulae here). Use setInterval for this, it's always happening, bounce.. bounce.. bounce.. there is Terminal Velocity, just keep that in mind.

User controls left and right movement only. There is some acceleration as you HOLD these but the rate is quick and hits a max quickly. What is moving? The backround and play area only. The player component stays at x = 0. Background Scrolling needs to have some sort of far-back parralax situation.

Goal is to get to the end of the course. The course is made up of gaps and terrain. 

The bouncing occurs on top of specific components that have "collision detection" of some sort. The bouncer cannot enter the space within a platform component, it's an obstruction from all angles other than on top which the bouncer bounces from.

Start with BLOCKS and later on implement nicer components and any other fancy visualization, not to mention SOUND.
