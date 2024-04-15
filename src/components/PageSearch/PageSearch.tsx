"use client";

import { Search } from "../Search/Search";
import { useState } from "react";

export const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={setRoomTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
};
