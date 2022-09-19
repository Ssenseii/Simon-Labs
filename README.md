# Developement: 

## September 17th.

After learning more about responsive design, react patterns and performance enhancement for faster reload with SSR. I have decided it's time to rebuild the website from scratch.

- Tailwind CSS for styles: small bundle size and scales easily with ~~adaptive~~ responsive design.
- I won't use Next.JS this time, but once I finish the website and deploy it. I'll rebuild the website to include SSG (HUGO or Jekyll) for some static content -> (sub 1ms load time).
- Well developed custom hooks instead of HOC for small JS bundles.
- responsive design first -> scale from movile to wider screens.
- rebuild style-guide with responsive values and typography-aware units.

    ### links

      - https://web.dev/learn/design/
      - https://www.patterns.dev/
      - https://tailwindcss.com/docs/optimizing-for-production
      - https://alistapart.com/article/mobile-first-css-is-it-time-for-a-rethink/
      - https://material.io/design/typography/the-type-system.html#type-scale 
      
      
## September 18th.

After testing Tailwind out for a day now. I've come to the conclusion it won't work with the design I had in mind.
It limits the customizability greatly, allowing less creativity with the design.
It's still a great tool for building websites and I will be using it for the blog probably.
But it's not for websites that require "fine tuning the settings"

I'll be going back to my favorite option: SCSS
