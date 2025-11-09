import * as React from 'react';

interface MusicVideoGuidelinesModalProps {
  onClose: () => void;
}

const MusicVideoGuidelinesModal: React.FC<MusicVideoGuidelinesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">MUSIC VIDEO GUIDELINES/SPECIFICATIONS</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Music Video Guidelines</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><span className="font-semibold">Graphic Overlays:</span> Music videos must not contain chyrons, static or scrolling lyrics, or lower-third graphics.</li>
            <li><span className="font-semibold">Release Dates or Advertisements:</span> Music videos must not contain release dates, logos, or advertisements.</li>
            <li><span className="font-semibold">Nonstandard Music Videos:</span> Music videos that are artist interviews, commentaries, behind the scenes, or similar in content must be bundled with a music album and cannot be sold individually.</li>
            <li><span className="font-semibold">Promotional Still Image Videos:</span> Promotional videos (such as videos displaying only the cover art and audio or slide shows) will not be accepted.</li>
            <li><span className="font-semibold">Teasers, Trailers and Partial Videos:</span> Music videos which have been shortened or edited into a promotional teaser, trailer or partial version will not be accepted.</li>
            <li><span className="font-semibold">Music Video Quality:</span> Music videos with poor quality (such as glitches, blurriness, incomplete video or audio, no audio, out of sync audio and video, and so on) will not be accepted.</li>
            <li><span className="font-semibold">Explicit Content:</span> Music videos that contain explicit language, nudity, drug references, or depictions of drug use must be marked “Explicit.”</li>
            <li><span className="font-semibold">Music Videos from Films:</span> Music videos taken from musical films must contain a title version that refers to the film such as (From “Name of Film”).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Music Video Specifications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><span className="font-semibold">File Format:</span> QuickTime (.mov files)</li>
            <li><span className="font-semibold">Codec:</span> Apple PRO RES 422 (HQ)</li>
            <li><span className="font-semibold">Size:</span> 1920×1080 pixels</li>
            <li><span className="font-semibold">Video Bitrate:</span> ~220 Mb/s</li>
            <li><span className="font-semibold">Framerate:</span> 24 or 25 fps</li>
            <li><span className="font-semibold">Colorspace:</span> YUV 422</li>
            <li><span className="font-semibold">Gamma Range:</span> Between 2.15 and 2.25</li>
            <li><span className="font-semibold">Pixel ratio:</span> Ratio must be 1:1 (square pixel)</li>
            <li><span className="font-semibold">Progressive:</span> The video must not be interlaced</li>
            <li><span className="font-semibold">Black frame begining/ending:</span> The video must contain one black frame at the beginning and at the end</li>
            <li><span className="font-semibold">Black bar scopes and logos:</span> No logo will be accepted Black bars accepted but we need crop size information (in pixels).
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>crop left: The number of whole pixels from the left of the encoded image to remove.</li>
                <li>crop top: The number of whole pixels from the top of the encoded image to remove.</li>
                <li>crop right: The number of whole pixels from the right of the encoded image to remove.</li>
                <li>crop bottom: The number of whole pixels from the bottom of the encoded image to remove.</li>
              </ul>
            </li>
            <li><span className="font-semibold">Sound Quality:</span> Codec – PCM Sampling frequency, 48 kHz Sample size, 16 bits Audio bitrate, ~1536 kb/s, 2 Channels (stereo)</li>
          </ul>
        </div>
        <div className="text-right mt-6">
          <button onClick={onClose} className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
};

export default MusicVideoGuidelinesModal;
