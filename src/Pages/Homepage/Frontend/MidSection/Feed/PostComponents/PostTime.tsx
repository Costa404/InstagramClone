import React, { useEffect, useState } from "react";

type PostTimeProps = {
  createdAt: Date | string | null | undefined; // Accept both Date and string, and also null or undefined
};

const PostTime: React.FC<PostTimeProps> = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      if (!createdAt) {
        setTimeAgo("Date not available");
        return;
      }

      const now = new Date();
      const createdDate =
        typeof createdAt === "string" ? new Date(createdAt) : createdAt;

      // Check if createdDate is valid
      if (isNaN(createdDate.getTime())) {
        setTimeAgo("Invalid date");
        return;
      }

      const timeDiff = Math.abs(now.getTime() - createdDate.getTime());

      // Calculate time in minutes, hours, days, etc.
      let result = "";
      if (timeDiff < 60000) {
        // Less than 1 minute
        result = "Just now";
      } else if (timeDiff < 3600000) {
        // Less than 1 hour
        const minutes = Math.floor(timeDiff / 60000);
        result = `${minutes} min ago`;
      } else if (timeDiff < 86400000) {
        // Less than 1 day
        const hours = Math.floor(timeDiff / 3600000);
        result = `${hours} h ago`;
      } else {
        // More than 1 day
        const days = Math.floor(timeDiff / 86400000);
        result = `${days} day ago`;
      }

      setTimeAgo(result);
    };

    calculateTimeAgo(); // Calculate immediately on component mount
    const intervalId = setInterval(calculateTimeAgo, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, [createdAt]);

  return <div className="mb-2 text-dark">{timeAgo}</div>; // Display the time
};

export default PostTime;
