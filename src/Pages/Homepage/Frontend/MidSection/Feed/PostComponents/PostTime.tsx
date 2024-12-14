import React, { useEffect, useState } from "react";

type PostTimeProps = {
  createdAt: Date | string | null | undefined;
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

      if (isNaN(createdDate.getTime())) {
        setTimeAgo("Invalid date");
        return;
      }

      const timeDiff = Math.abs(now.getTime() - createdDate.getTime());

      let result = "";
      if (timeDiff < 60000) {
        result = "Just now";
      } else if (timeDiff < 3600000) {
        const minutes = Math.floor(timeDiff / 60000);
        result = `${minutes} min ago`;
      } else if (timeDiff < 86400000) {
        const hours = Math.floor(timeDiff / 3600000);
        result = `${hours} h ago`;
      } else {
        const days = Math.floor(timeDiff / 86400000);
        result = `${days} day ago`;
      }

      setTimeAgo(result);
    };

    calculateTimeAgo();
    const intervalId = setInterval(calculateTimeAgo, 60000);

    return () => clearInterval(intervalId);
  }, [createdAt]);

  return <div className="mb-2 text-dark">{timeAgo}</div>;
};

export default PostTime;
