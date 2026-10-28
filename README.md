# Blocksure ecosystem showcase

Eleven platform tiles over an animated background, plus a QR code and built-in enquiry panel. All styling, icons, scripts, QR image, video and fallback poster are embedded in `index.html`; no companion assets, package installation or build step are required. The page is approximately 5 MB including the video.

## Run

From this repository:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Serve the repository root on any static host, or open `index.html` in a browser. `enquiry.html` also embeds the same Google Form as a standalone page.

## Enquiries

The configured public form is:

https://docs.google.com/forms/d/e/1FAIpQLSe1-FA0ihWiH_lW-8574BSyRvz1mMTkj5Qxr0LtKTfsCAc1og/viewform

- The floating QR panel is visible on the first screen and opens this exact form on a visitor's phone. Drag its top grip with a finger or mouse to reposition it. Its position is remembered on the device when browser storage is available, and kept on screen after rotation. Use the reset icon to restore its default position; keyboard users can focus the grip and use arrow keys or Home.
- **Let's connect** opens the Google Form in a panel over the platform tiles.
- A separate-tab link remains available if embedding is blocked, and works without JavaScript.
- `#connect` opens the enquiry panel directly when entering the page.
- The QR image, enquiry button and direct form link remain available on phones and tablets. The floating panel stays in view while scrolling.
- The iframe loads only when the enquiry panel is opened.

Google Forms handles validation and submissions. The website does not receive or store enquiry details. To ensure responses also appear in a spreadsheet, open the form editor, choose **Responses**, and link a Google Sheet. The provided form's response collection and Sheet destination could not be verified from this environment because Google network requests were blocked. Submit a test on a phone and check the form's Responses tab and linked Sheet before the event.

The Google Forms responder URL is set in `GOOGLE_FORM_URL` inside `index.html`. If changing forms, update the iframe/fallback links in both pages and regenerate the embedded QR image too. Do not substitute a private edit URL.

The optional script in [setup](setup/README.md) creates a new Google Form and linked Sheet; it is not required for the existing supplied form.

## Background and links

The background video loops silently. The bottom-right control pauses/resumes it, reduced-motion preferences stop animation, and the poster is available when autoplay is unavailable. Playback pauses while the document is hidden. All eleven supplied platform URLs open in new tabs.

Product labels and descriptions remain provisional, inferred from the original URLs. Review these against official product content before public use. Staging links are preserved exactly as supplied.
