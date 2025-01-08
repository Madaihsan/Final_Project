import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Firestore listener untuk aktivitas terbaru
    const activitiesRef = collection(db, "activities");
    const activitiesQuery = query(activitiesRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(activitiesQuery, (snapshot) => {
      const activitiesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setActivities(activitiesData);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <div className="recent-activities bg-white p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-3">Recent Activities</h2>
      <ul className="text-sm text-gray-700">
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            <strong>{activity.activity}</strong> -{" "}
            <span className="text-gray-500">
              {new Date(activity.timestamp).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
