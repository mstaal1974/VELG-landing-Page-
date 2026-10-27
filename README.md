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
