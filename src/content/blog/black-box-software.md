---
title: "Black Box Software"
description: "Software is now a black box that anyone can mold to their desired output"
pubDate: 2026-03-22
tags: ["software", "development", "AI"]
draft: false
---

<!-- Disclaimer: AI psychosis is absolutely real and its effects will be studied for years to come. -->

AI makes software trivial, at least that software that is itself trivial, or rather, personal.

Software has always been a black box to those who consume it. We don't know the inner workings of Discords image storage system or the CPU scheduler for Windows 11, but we don't need to and most have no interest in it if offered to them.

All the customer cares about is that images show up when they send them to friends, or that programs run smoothly when they need them. Put simply, they care that they get the expected output when they give a specific input. That's all. Everything else is to make that experience of getting the expected output better. UI/UX, code optimizations, accessibility, scaling systems globally. It's all in service of the black box that customers interact with.

If you wanted a change as a customer, you had to send an email, a DM, fill out a contact form or whatever and just pray that some dev picks it up next time they're free.

With AI though, that changes dramatically.

Software is still a black box. But now a customer can have a very specific piece of software they want to exist, can go to their mediator (an LLM) between you and the black box, and can create their own software. If they don't like how it looks, they can ask the LLM to change it. If they want a new feature, they can ask the LLM to add it.

Is the code optimized? No. Is it ready to scale to millions of users? No. Is it terribly insecure and an eyesore for any experienced dev? Yeah probably. But it works for them. It's personal and malleable.

It isn't the statue of David of software, but it is a little statue that they made that does exactly what they want it to do.

Take for example [Plank](https://github.com/logscore/plank), a media server I made in a week and a half with an LLM. I've personally written maybe 30 percent of the code, with LLMs writing the rest. I made it because I wanted a better experience than Jellyfin and Plex, though they are phenomenal products. So, that's what I did. Is it perfect? No. it's a little unstable at times, especially when I want to add in a TV series that may not be widely available on torrent mirrors, but that's fine. Why? Because I can change that. In a weekend, I can architect and overhaul the entire TV download pipeline to be faster, more transparent, and be a better experience for me and my family to use.

Now, much of Plank is a black box to me. I don't particularly understand how the torrent streaming works at a low level and the FFMPEG transmuxxing is beyond me, but I don't need to know that because when I want to stream the new season of Andor (it's very good btw, the only good Star Wars media to come in a long time), its one click and the episode starts playing. The black box works.

This is where every non-technical person is going, and I hope this can help software devs and computer nerds to understand that people don't care about the guts of software. They just care that their input gets the right output from the magic black box in front of them.

It's fine to point and laugh at the PM that vibe codes an app then gets absolutely pwned after bragging that "ENGINEERS ARE FINISHED!" on X. But let's not kid ourselves that people actually care how our software works on the inside. LLMs are a perfect example. The average person doesn't understand neural networks, post-training, or how an LLM knows that you meant Paris, France and not Paris, Texas (I don't know either). They just know that when they ask it how to make a flat crust pizza, it gives them a recipe for flat crust pizza.

Now, this isn't to say that software development is trivial. It is quite the opposite. As stated above, AI makes software trivial for software that is itself _trivial_. Writing and maintaining the Linux kernel is hard and highly difficult work. Building and maintaining an infrastructure platform used by many millions like AWS or GCP is difficult and requires expertise up and down the stack. But for a cook book app that your mom has been wanting? Or the roadtrip planner your buddy whipped up in a week with Codex? That is trivial.

Some people call this "the era of personal software" and I tend to agree with that term. Software now has the propensity to be deeply personal, with a non-technical person being able to put the object in their mind into the computer and have it work without years of study, practice and discipline. Chocolate was once a delight of the noble class, now we can buy boxes of it at convenience stores.

Software is becoming democratized rapidly. It was once the sole domain of studied, experienced computer nerds. Now it's the domain of the every day person with 200 dollars and a clear idea. It won't be the Sistine Chapel, but it's theirs, and it does what _they_ want it to do.
