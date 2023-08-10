---
title: 'React Folder Structure'
date: '2023-08-09'
---

# Folder Structures in React
Embarking on a new project is exhilarating, but one challenge persists: establishing
the right folder structure. The impact of this seemingly mundane choice on project 
organization and development keeps me up at night (sometimes). Seeking wisdom,
I tweeted Dan Abramov, a notable figure, for advice. Where he basically said,
"It's the last thing I'm worried about.".

Despite Dan's short response, I am still curious about the ideal structure for a
React project. This thoughtful process, to me, has highlighted the pivotal role
a well-designed framework plays in a seamless development experience.

In this blog post, I'll dive into a key pattern that serves as the cornerstone
of my React folder strategy. This pattern doesn't just provide a solid foundation for
project organization, but it also enhances collaboration, maintainability, and
scalability.

## Personal Projects
In my projects, I often start with Next.js. This choice significantly simplifies
my life when it comes to establishing a coherent folder structure, thanks to the
inherent routing capabilities it offers.

When I first started with Next.js, my folder structure resembled the following:
```md
/src
  /pages
    home.tsx
    blog.tsx
    ...
  /components
    NavBar.tsx
    Footer.tsx
    ...
  helpers.ts
``````

However, with the insights gained from two years in the industry, I've embraced a
new approach that aligns more closely with my evolving needs:
```md
/src
  /pages
    home.tsx
    blog.tsx
    ...
  /components
    /navbar
      component.tsx
      helpers.ts
    /footer
      component.tsx
      helpers.ts
      ...
  /styles
    globals.css
    ...
```
This revised pattern resonates with me due to the inherent sense of control it
provides over my codebase. It empowers me to maintain cleaner, more focused main
component files, avoiding the accumulation of excessive lines by breaking down
complex functionalities into smaller, more manageable pieces—a practice facilitated
by this simple, yet well-structured framework.

## Professional Work
Navigating this concept took a bit of time, but the journey was well worth it. At my
workplace, I'm deeply involved with a repository that's rapidly evolving into a
central product. The repository experiences a constant influx of code as we race to
flesh out our Minimum Viable Product (MVP).

Amidst this dynamic development, it's important to lay the foundation for a
future-proofed application that boasts scalability and maintainability. This
forward-thinking approach is vital, allowing us to gracefully accommodate future
changes without grappling with convoluted complexities.

This approach has been a source of inspiration for the structure I've embraced in
my projects.

It looks a little something like this:
```md
/commons
  /components
    /text
    /flex-container
    ...
/src
  /screens
    /home
      /components
        /section
        ...
      components.ts
      index.tsx
      helpers.ts
      state.ts
      ...
    /blog
      /components
        /post-container
        ...
      components.tsx
      index.tsx
      helpers.ts
      state.ts
      ...
``````
There's more here than meets the eye.

Firstly, the `/commons` directory houses the most frequently used components across the
application. This repository-wide resource pool is a strategic move to sidestep
unnecessary duplication. By centralizing these components, we avoid bloat and ensure
clean and efficient organization. This rule, of course, extends to all levels of the structure.

Secondly, we have the `/src` folder, which holds the `/screens` directory, akin to the
conventional `/pages` setup in Next.js. Within this structure, each distinct page
possesses its own designated folder. Delving further, within these folders, we curate
the components, state management, and assisting functions specific to that page. This
segmentation streamlines the development process. When focusing on a particular page,
everything essential is conveniently accessible within its dedicated folder.

This strategic architecture doesn't just optimize organization; it catalyzes efficient
teamwork, scalability, and ease of maintenance. It's a reflection of the principle
that a well-structured foundation fosters an environment where creativity and
innovation can flourish.

In the realm of React folder structures, the journey from puzzlement to clarity has
been a never-ending journey for me, as I'm constantly seeking improvements.
Dan Abramov's candid wisdom—"It's the last thing I'm worried about"—still echoes as a
guiding beacon, though I've come to understand the importance of a well-crafted
framework in development.

From shaping my projects with the convenience of Next.js to unraveling the
complexities of a rapidly evolving repository at work, I've found that an intuitive
structure does more than just organize code—it fosters an atmosphere where innovation
flourishes and collaboration thrives. So, as you venture into your own coding
adventures, remember that the right structure isn't just about folders; it's about
crafting a canvas for your creativity to shine.

Happy coding!