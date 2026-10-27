# Blocksure ecosystem showcase

Nine linked platform tiles over an animated background, using the supplied trade show video. All styles, icons, scripts, video and fallback image are embedded in `index.html`; no companion assets, package installation or build step are required.

## Run

From this repository, run:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Serve the repository root on any static host, or open the HTML file in a browser. The self-contained file is approximately 5 MB because it includes the video.

## Behaviour

- All nine supplied destinations open in a new tab.
- The background loops silently; the small bottom-right button pauses or resumes it.
- Reduced-motion preferences show the still poster instead. A poster also provides a fallback when autoplay is unavailable.
- Playback pauses when the page is hidden and resumes only when permitted by the visitor's preference.
- The tiles adapt to desktop, tablet and mobile screens and remain available without JavaScript.

Product labels and descriptions are provisional, inferred from the supplied URLs. Review these against official product content before public use. Staging links are preserved exactly as supplied.

## Enquiry form and QR code

The recommended live response store is Google Forms linked to Google Sheets. See [one-time setup instructions](setup/README.md) and the included Google Apps Script. Once the public responder URL is available, the showcase can display a scannable QR code directly to it. A “Let’s connect” button now opens the mobile-friendly enquiry panel directly over the tiles. `#connect` opens this panel when entering the page. No live response destination or QR code is configured yet.

### Connect the built-in form

After completing the Google setup, provide the full public responder URL (`https://docs.google.com/forms/d/e/.../viewform`). Set `GOOGLE_FORM_URL` in `index.html` to this URL. The panel then embeds the live Google Form instead of the disabled draft, with a separate-tab fallback link. Google stores submissions in the response spreadsheet. The current draft cannot submit and does not claim to save responses. Do not use the private edit URL.
