# Hero Section Video Overlay Feature Specification

## 1\. Purpose and Goals

The hero section is the first area visitors see when they land on a page. It should quickly communicate the company’s value proposition, build trust and encourage visitors to take action. For this specification:

·         **Layout:** two columns. The left column (≈50–60% width) features a video preview. The right column contains a headline, subheading and call‑to‑action (CTA) buttons.

·         **Video presentation:** Instead of auto‑playing a full‑length video, a play button overlays a static preview (poster image). When the visitor clicks the play button, a modal/lightbox opens and plays the full video. This approach reduces initial load time and gives visitors control over media playback—important because users don’t appreciate surprise auto‑play[\[1\]](https://www.nngroup.com/articles/video-usability/#:~:text=When%20users%20arrive%20at%20a,of%20content%20on%20the%20page).

·         **Responsive behaviour:** The layout must adjust gracefully on small screens—stacking vertically and ensuring touch targets remain accessible.

## 2\. Layout and Responsive Design

### 2.1 Desktop (≥992 px width)

·         **Split layout:** Use a flexible grid with two columns. The video column occupies roughly 55% of the horizontal space; the text/CTA column occupies the remainder. Maintain generous whitespace between columns and separate groups to avoid visual clutter. Appropriate margins and typography help guide the user’s eye and maintain hierarchy[\[2\]](https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/#:~:text=,section%2C%20also%20keeping%20necessary%20whitespace).

·         **Visible content below fold:** Avoid making the hero section fill the full viewport height; research shows that when the hero extends beyond the fold users think there is no content below and stop scrolling[\[3\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=1,to%20encourage%20users%20to%20scroll). Leave part of the next section visible or include a scroll indicator.

·         **Scroll signifier:** Include an arrow or subtle animation indicating that more content is available below the hero[\[4\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=2,the%20video%20in%20the%20background).

·         **Image/Video placeholder:** Display a high‑quality poster image with a semi‑transparent play button overlay centred on the video. Include the video’s title and duration (e.g., “2:15”) near the button to set expectations[\[5\]](https://www.nngroup.com/articles/video-usability/#:~:text=Tell%20Users%20What%E2%80%99s%20Coming). Use an accessible <button> element with aria-label="Play video" to trigger the modal.

### 2.2 Mobile (≤991 px width)

·         **Vertical stacking:** Stack the video preview above the text/CTA. This respects narrow screens and ensures the CTA remains within thumb reach[\[6\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=). Reduce the video’s aspect ratio height or crop to maintain an appropriate ratio and to keep content below the fold visible.

·         **CTA placement:** Place primary CTA buttons immediately below the subheading with adequate spacing. Buttons must span most of the viewport width and be at least 44 × 44 px for tap accuracy.

·         **Modal presentation:** On mobile, the modal/lightbox should occupy most of the viewport but leave a small margin. Provide a prominent close button in the top‑right and allow dismissal via tapping outside the modal or using the back button.

### 2.3 Accessibility and Interaction

·         **Keyboard navigation:** Ensure that focus moves into the modal when it opens and returns to the triggering element when it closes[\[7\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Ensure%20accessibility). Support closing via the Esc key[\[8\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=1).

·         **Screen readers:** Use semantic HTML (<button>, <dialog> or <div role="dialog" aria-modal="true">) and descriptive labels. Provide transcripts or captions for the video[\[9\]](https://www.nngroup.com/articles/video-usability/#:~:text=to%20the%20information%20contained%20in,can%E2%80%99t%20be%20played%2C%20or%20freezes).

·         **Visual contrast:** Maintain high contrast for text and buttons, including the play overlay, for readability and compliance.

## 3\. Video Implementation

### 3.1 Poster Image and Play Button

·         **Use the** **poster** **attribute** on the <video> element to specify a placeholder that displays until enough of the video is downloaded[\[10\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=The%20HTML5%20%60,such%20as%20CSS%20and%20JavaScript). Optimise poster images using heavy compression or blur; aim for ≈10 kB per poster for fast rendering[\[11\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=Placeholder%20images%20can%20be%20heavily,around%2010kB%20for%20each%20video). Preload the poster image using <link rel="preload" … as="image"> to avoid late loading[\[12\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=We%20can%20help%20the%20browser,that%20it%20hasn%27t%20yet%20discovered).

·         **Play overlay:** Provide a high‑contrast play icon centred on the poster. Use CSS to ensure the icon scales on smaller screens and remains touch‑friendly. The button should be accessible by keyboard and screen readers (e.g., <button aria-label="Play company video">). Indicate the video’s length next to the play button[\[5\]](https://www.nngroup.com/articles/video-usability/#:~:text=Tell%20Users%20What%E2%80%99s%20Coming).

·         **Bandwidth detection (optional advanced feature):** Detect low bandwidth using navigator.connection.downlink and, for slow connections, avoid loading the video until the user clicks play. Offer only the poster and play button so users can opt in[\[13\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=Optimisation%205%3A%20Don%27t%20request%20video,bandwidth%20connections).

### 3.2 Modal/Lightbox Behaviour

·         **User‑initiated opening:** Only open the modal in response to the play button click. Avoid auto‑triggered modals because unexpected pop‑ups frustrate users[\[14\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Avoid%20auto).

·         **Sizing:** Keep the modal’s width below ~50% of the viewport on desktop so the background content remains partially visible and context is maintained[\[15\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=4). On mobile, allow the modal to fill most of the screen, but ensure the close button is always visible.

·         **Dismissal options:** Provide multiple ways to close the modal: a visible “×” button, a keyboard‑accessible close button, clicking outside the modal, or pressing Esc[\[16\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Make%20modals%20easily%20dismissible).

·         **Dimmed backdrop:** Use a translucent overlay behind the modal to draw focus and indicate that background interactions are disabled[\[17\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=When%20you%20open%20a%20modal,interact%20with%20the%20parent%20page). Ensure that screen readers mark the rest of the page as inert while the modal is open (e.g., aria-hidden="true").

·         **Video playback:** Autoplay the video (muted) only after the modal opens to honour user intent. Provide native controls for play/pause, scrubbing, and volume. Muted autoplay is recommended if auto‑play is necessary[\[18\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=The%20visual%20component%20is%20responsible,on%20page%20and%20scroll%20depth); however, starting the video manually on user click is safer[\[1\]](https://www.nngroup.com/articles/video-usability/#:~:text=When%20users%20arrive%20at%20a,of%20content%20on%20the%20page).

·         **Content context:** Display a short title and description above or below the video within the modal. Include a clear CTA or related links at the end of the video to guide users further[\[19\]](https://www.nngroup.com/articles/video-usability/#:~:text=Also%20consider%20what%20the%20user,clear%20path%20to%20additional%20information).

### 3.3 Video Content Guidelines

·         **Build trust & provide context:** Effective hero videos should establish credibility and communicate the company’s purpose quickly[\[20\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Resist%20the%20temptation%20to%20complicate,the%20most%20effective%20hero%20videos). Use cinematic yet authentic footage showing real employees, customers or products in action. Pair the video with a headline and subheading outside the video so users immediately know what they are watching[\[21\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Hero%20Videos%20Should%20Provide%20Context).

·         **Keep it short:** The hero video should be a concise loop (15 seconds and no more than 30 seconds)[\[22\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Hero%20Videos%20Should%20Be%20Short,Fifteen%20Seconds%20Is%20Often%20Plenty). Visitors rarely stay at the top of a page longer than a few seconds on mobile[\[23\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=the%20page%20for%20more%20than,%E2%80%9D). Provide a link inside the modal to the full‑length video if a longer narrative exists[\[24\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=For%20those%20DMOs%20that%20have,destination%7D%2C%20click%20here.%E2%80%9D).

·         **Optimise performance:** Compress videos, remove unnecessary audio tracks and select appropriate formats (e.g., WebM/MP4). Host videos on a CDN. Lazy‑load the video source until the play button is clicked to reduce initial page weight. According to research, 53 % of mobile users abandon sites that take longer than 3 seconds to load[\[25\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=A%20slow,loading%20speed%20directly%20influences%20bounce). Use responsive preloads and source selection to serve different resolutions to desktop and mobile[\[10\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=The%20HTML5%20%60,such%20as%20CSS%20and%20JavaScript).

·         **Alternate content:** Don’t rely solely on the video to convey critical information. Users might skip the video or have technical limitations[\[26\]](https://www.nngroup.com/articles/video-usability/#:~:text=Don%E2%80%99t%20Rely%20Solely%20on%20Video). Provide text summaries and transcripts, and ensure essential messages appear in the accompanying headline and subheading.

### 3.4 YouTube‑specific embed guidance

When hosting your hero video on YouTube, it is important to tailor the embed code for a clean and accessible experience. YouTube’s default player includes branding, end‑screen recommendations and analytics scripts that can distract visitors or slow down the page. To mitigate these issues:

·         **Use the privacy‑enhanced domain:** Embed videos from the youtube-nocookie.com domain to prevent YouTube from setting tracking cookies until the user interacts with the player. Example: https://www.youtube-nocookie.com/embed/VIDEO\_ID.

·         **Lazy‑load the player:** Apply loading="lazy" to the <iframe> so the player only loads when it approaches the viewport. Keep the hero’s initial load lightweight by showing a poster image and play button and loading the YouTube iframe only after the modal opens.

·         **Limit related videos:** Append the parameter rel=0 to the iframe’s src attribute. This restricts related videos to the same YouTube channel; YouTube no longer allows the complete removal of recommendations[\[27\]](https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos#:~:text=parameters%20%28i,the%20URL%20of%20the%20video).

·         **Reduce branding:** Add modestbranding=1 to minimise the YouTube logo in the control bar, and leave controls=1 enabled so users still have access to play/pause and captions[\[27\]](https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos#:~:text=parameters%20%28i,the%20URL%20of%20the%20video). Avoid hiding controls entirely, as users and assistive technologies need them for accessibility.

·         **Autoplay after interaction:** Do not autoplay the video on page load. Instead, append autoplay=1 (and optionally mute=1) only when the user has clicked the play button and the modal opens. This honours user intent and complies with browser autoplay policies[\[1\]](https://www.nngroup.com/articles/video-usability/#:~:text=When%20users%20arrive%20at%20a,of%20content%20on%20the%20page).

·         **Descriptive titles and attributes:** Provide a meaningful title attribute on the <iframe> (e.g., title="Company overview video") and ensure the surrounding play button has an aria-label describing its purpose. Use semantic dialog roles and focus management as described in §2.3 and §5 for accessibility.

·         **Be aware of limitations:** Even with rel=0, YouTube may still show recommended content from your own channel after the video finishes. If a completely distraction‑free experience is critical, consider hosting the video on Vimeo or a private CDN instead[\[27\]](https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos#:~:text=parameters%20%28i,the%20URL%20of%20the%20video).

## 4\. Text and CTA Content

·         **Headline:** Craft a concise, benefit‑oriented headline that articulates your unique value. The headline should immediately answer “What’s in it for me?” and highlight outcomes rather than features[\[18\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=The%20visual%20component%20is%20responsible,on%20page%20and%20scroll%20depth).

·         **Subheading:** Expand on the headline with a short description that provides context and encourages curiosity without overwhelming the reader[\[28\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=).

·         **Primary CTA:** Include one prominent CTA button that aligns with the page’s main goal—e.g., “Get Started” or “Watch Full Story.” Research shows limiting CTAs improves conversion rates and reduces cognitive load[\[2\]](https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/#:~:text=,section%2C%20also%20keeping%20necessary%20whitespace). Use a high‑contrast colour and place it prominently below the text.

·         **Secondary CTA (optional):** If necessary, include a secondary CTA (e.g., “Learn More”) with a subtler style so it doesn’t compete with the primary action[\[29\]](https://prismic.io/blog/website-hero-section#:~:text=When%20your%20hero%20section%20has,distract%20from%20your%20primary%20goal).

·         **Social proof or trust elements:** Adjacent to the CTA, consider adding logos, metrics or testimonials to build trust[\[30\]](https://prismic.io/blog/website-hero-section#:~:text=Combine%20trusted%20brand%20logos%20with,and%20trust%20at%20first%20glance). Keep these elements unobtrusive and ensure they don’t compete with the main message[\[31\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=Secondary%20elements%20like%20trust%20badges%2C,headline%20or%20CTA%20for%20attention).

## 5\. Modal Accessibility and UX Best Practices

·         **User control:** Users should decide when to watch the video. Auto‑playing content without consent can confuse or annoy users[\[1\]](https://www.nngroup.com/articles/video-usability/#:~:text=When%20users%20arrive%20at%20a,of%20content%20on%20the%20page). Provide intuitive controls (play/pause, mute/unmute, volume) and allow the video to restart if needed.

·         **Easy escape:** Always provide an escape hatch: cancel or close button, clicking outside the modal, and the Esc key[\[8\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=1). The button label and modal title should match the action (e.g., a button labelled “Play video” opens a modal titled “Company Video”)[\[32\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=2).

·         **Appropriate size and position:** Place modals in the upper half of the viewport and avoid covering the entire screen on desktop[\[15\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=4). Ensure that content fits without requiring scrolling; if the video is long or requires interaction, consider a dedicated page instead of a modal.

·         **Avoid nested modals:** Don’t launch another modal from within the video modal. Nested modals are confusing and hard to navigate[\[15\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=4).

·         **Mobile considerations:** Modals can be difficult on small screens[\[33\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=Modals%20and%20mobile%20devices%20usually,be%20used%20on%20mobile%20devices). Consider using a full‑screen overlay or slide‑up sheet with clear controls. Provide accessible headings and maintain focus management.

## 6\. Performance & Technical Considerations

·         **Optimise assets:** Use modern video codecs (H.264/AV1 for MP4 or WebM) and adaptive streaming when possible. Strip audio tracks if the hero video is always muted. Serve videos via a CDN to reduce latency[\[25\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=A%20slow,loading%20speed%20directly%20influences%20bounce).

·         **Lazy loading:** Do not load the full video on initial page render. Instead, load the poster image first and defer loading of the video source until the play button is clicked or until the modal opens. This technique reduces initial page weight and improves perceived performance.

·         **Responsive video sources:** Provide multiple video sizes and select an appropriate source for the user’s device. Use JavaScript or a video hosting service to deliver optimal resolutions[\[13\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=Optimisation%205%3A%20Don%27t%20request%20video,bandwidth%20connections).

·         **Fallback:** Provide a <noscript> fallback with a static image and a link to view the video on a dedicated page in case JavaScript is disabled[\[34\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=To%20get%20started%20with%20your,just%20showing%20the%20poster%20image).

## 7\. Example Structure (Pseudo‑HTML)

<section class="hero">  <div class="container">  
    <div class="hero-video">  
      <button class="video-play-btn" aria-label="Play company video">  
        <img src="poster.jpg" alt="Company video preview" loading="lazy" />  
        <span class="play-icon"></span>  
        <span class="duration">2:15</span>  
      </button>  
    </div>  
    <div class="hero-content">  
      <h1>Your Benefit‑Focused Headline</h1>  
      <p class="subheading">Short supporting text that provides context.</p>  
      <div class="cta-group">  
        <a href="#" class="btn-primary">Get Started</a>  
        <a href="#" class="btn-secondary">Learn More</a>  
      </div>  
    </div>  
  </div>  
 
  <!-- Modal structure -->  
  <div id="video-modal" class="modal" aria-modal="true" role="dialog" hidden>  
    <div class="modal-content">  
      <button class="modal-close" aria-label="Close video">×</button>  
      <h2>Company Video</h2>  
      <p class="modal-description">Quick description of what the video covers.</p>  
      <video controls preload="metadata" poster="poster.jpg">  
        <source src="video.mp4" type="video/mp4" />  
        <source src="video.webm" type="video/webm" />  
        <!-- caption track -->  
        <track kind="subtitles" srclang="en" src="captions.vtt" label="English" default />  
      </video>  
    </div>  
  </div>  
</section>


## 8\. Summary of Key Practices

·         **Contextual messaging:** Provide clear headlines and subheadings; do not rely on the video alone for critical information[\[26\]](https://www.nngroup.com/articles/video-usability/#:~:text=Don%E2%80%99t%20Rely%20Solely%20on%20Video).

·         **User control:** Avoid auto‑play; allow users to start videos and provide easy dismissal[\[16\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Make%20modals%20easily%20dismissible).

·         **Fast loading:** Use poster images, lazy‑load videos and optimise assets[\[10\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=The%20HTML5%20%60,such%20as%20CSS%20and%20JavaScript); compress images and video to ensure the hero loads within 3 seconds[\[25\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=A%20slow,loading%20speed%20directly%20influences%20bounce).

·         **Short video loops:** Limit hero videos to about 15–30 seconds and include a call‑to‑action for longer content[\[22\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Hero%20Videos%20Should%20Be%20Short,Fifteen%20Seconds%20Is%20Often%20Plenty).

·         **Accessible modals:** Provide descriptive titles, ensure focus management, and offer multiple ways to close the modal[\[8\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=1).

·         **Mobile‑first design:** Stack content vertically on mobile, keep CTAs thumb‑friendly and ensure modals adapt to small screens[\[6\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=).

·         **Single primary CTA:** Focus on one main action to reduce cognitive load[\[2\]](https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/#:~:text=,section%2C%20also%20keeping%20necessary%20whitespace) and offer a secondary action only if necessary[\[29\]](https://prismic.io/blog/website-hero-section#:~:text=When%20your%20hero%20section%20has,distract%20from%20your%20primary%20goal).

When embedding a YouTube video, use the privacy‑enhanced youtube‑nocookie.com domain, lazy‑load the iframe, and append parameters such as rel=0 and modestbranding=1 to minimise distractions[\[27\]](https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos#:~:text=parameters%20%28i,the%20URL%20of%20the%20video).

By adhering to these guidelines, the hero section will deliver a polished, accessible and performant introduction to the company, providing users with both context and control over multimedia content.

* * *

[\[1\]](https://www.nngroup.com/articles/video-usability/#:~:text=When%20users%20arrive%20at%20a,of%20content%20on%20the%20page) [\[5\]](https://www.nngroup.com/articles/video-usability/#:~:text=Tell%20Users%20What%E2%80%99s%20Coming) [\[9\]](https://www.nngroup.com/articles/video-usability/#:~:text=to%20the%20information%20contained%20in,can%E2%80%99t%20be%20played%2C%20or%20freezes) [\[19\]](https://www.nngroup.com/articles/video-usability/#:~:text=Also%20consider%20what%20the%20user,clear%20path%20to%20additional%20information) [\[26\]](https://www.nngroup.com/articles/video-usability/#:~:text=Don%E2%80%99t%20Rely%20Solely%20on%20Video) Video Usability - NN/G

[https://www.nngroup.com/articles/video-usability/](https://www.nngroup.com/articles/video-usability/)

[\[2\]](https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/#:~:text=,section%2C%20also%20keeping%20necessary%20whitespace) 10 best hero section examples and what makes them effective - LogRocket Blog

[https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/](https://blog.logrocket.com/ux-design/hero-section-examples-best-practices/)

[\[3\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=1,to%20encourage%20users%20to%20scroll) [\[4\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=2,the%20video%20in%20the%20background) [\[20\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Resist%20the%20temptation%20to%20complicate,the%20most%20effective%20hero%20videos) [\[21\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Hero%20Videos%20Should%20Provide%20Context) [\[22\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=Hero%20Videos%20Should%20Be%20Short,Fifteen%20Seconds%20Is%20Often%20Plenty) [\[23\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=the%20page%20for%20more%20than,%E2%80%9D) [\[24\]](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/#:~:text=For%20those%20DMOs%20that%20have,destination%7D%2C%20click%20here.%E2%80%9D) Hello, video! 4 tips for fantastic hero videos

[https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/](https://www.simpleviewinc.com/blog/stories/post/hello-video-4-tips-for-fantastic-hero-videos/)

[\[6\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=) [\[18\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=The%20visual%20component%20is%20responsible,on%20page%20and%20scroll%20depth) [\[25\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=A%20slow,loading%20speed%20directly%20influences%20bounce) [\[28\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=) [\[31\]](https://www.omniconvert.com/blog/hero-section-examples/#:~:text=Secondary%20elements%20like%20trust%20badges%2C,headline%20or%20CTA%20for%20attention)  Hero Section Optimization: Best Practices and Examples

[https://www.omniconvert.com/blog/hero-section-examples/](https://www.omniconvert.com/blog/hero-section-examples/)

[\[7\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Ensure%20accessibility) [\[14\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Avoid%20auto) [\[16\]](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/#:~:text=Make%20modals%20easily%20dismissible) Modal UX design: Patterns, examples, and best practices - LogRocket Blog

[https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/](https://blog.logrocket.com/ux-design/modal-ux-design-patterns-examples-best-practices/)

[\[8\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=1) [\[15\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=4) [\[17\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=When%20you%20open%20a%20modal,interact%20with%20the%20parent%20page) [\[32\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=2) [\[33\]](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c#:~:text=Modals%20and%20mobile%20devices%20usually,be%20used%20on%20mobile%20devices) Best Practices for Modals / Overlays / Dialog Windows | by Naema Baskanderi | UX Planet

[https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c](https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c)

[\[10\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=The%20HTML5%20%60,such%20as%20CSS%20and%20JavaScript) [\[11\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=Placeholder%20images%20can%20be%20heavily,around%2010kB%20for%20each%20video) [\[12\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=We%20can%20help%20the%20browser,that%20it%20hasn%27t%20yet%20discovered) [\[13\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=Optimisation%205%3A%20Don%27t%20request%20video,bandwidth%20connections) [\[34\]](https://simonhearne.com/2021/fast-responsive-videos/#:~:text=To%20get%20started%20with%20your,just%20showing%20the%20poster%20image) Fast and Responsive Hero Videos for Great UX

[https://simonhearne.com/2021/fast-responsive-videos/](https://simonhearne.com/2021/fast-responsive-videos/)

[\[27\]](https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos#:~:text=parameters%20%28i,the%20URL%20of%20the%20video) How To Remove YouTube Info From Embedded Videos | Web Content Management | Marketpath

[https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos](https://www.marketpath.com/blog/remove-youtube-info-from-embedded-videos)

[\[29\]](https://prismic.io/blog/website-hero-section#:~:text=When%20your%20hero%20section%20has,distract%20from%20your%20primary%20goal) [\[30\]](https://prismic.io/blog/website-hero-section#:~:text=Combine%20trusted%20brand%20logos%20with,and%20trust%20at%20first%20glance) Website Hero Section Best Practices + Examples: A Complete Guide

[https://prismic.io/blog/website-hero-section](https://prismic.io/blog/website-hero-section)