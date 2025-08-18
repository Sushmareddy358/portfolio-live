import React from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = () => {
  const handleShare = async () => {
    const shareData = {
      title: "Sushma Reddy Portfolio",
      text: "Check out Sushma Reddy's Data Portfolio!",
      url: window.location.href,
    };

    if (navigator.share) {
      // If browser supports sharing, open native share dialog
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user canceled or something went wrong, do nothing
      }
    } else {
      // If not, copy the link to clipboard as a fallback
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Profile link copied to clipboard!");
      } catch (err) {
        alert("Could not copy the link. Please copy it manually.");
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 bg-[#22713e] text-white rounded-xl shadow-lg font-semibold hover:bg-[#345f36] transition"
      title="Share this profile"
    >
      <FaShareAlt className="text-lg" />
      <span className="hidden sm:inline">Share</span>
    </button>
  );
};

export default ShareButton;
