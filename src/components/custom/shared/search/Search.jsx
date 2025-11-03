import React, { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { TrendingUp } from "lucide-react";

const Search = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span onClick={() => setOpen(true)}>{props.trigger || "Search"}</span>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for course/online learning provider" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Trending searches" className="font-medium">
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Online Mba
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Online Certificate course
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Business
              Administration
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Science
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Arts
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Commerce
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Computer
              Application
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Computer Science
            </CommandItem>
            <CommandItem>
              <TrendingUp className="w-4 h-4" /> Bachelor of Computer Science
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Search;
