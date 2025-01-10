import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NEWS_CATEGORIES } from "../categories";
import { useState } from "react";
import { setSearchCategory, useAppDispatch, useAppSelector } from "@/store";

export function SelectCategory() {
  const dispatch = useAppDispatch();
  const { searchCategory } = useAppSelector((state) => state.articles);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {searchCategory
            ? NEWS_CATEGORIES.find((cat) => cat.uri === searchCategory)?.label
            : "Select category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {NEWS_CATEGORIES.map((cat) => (
                <CommandItem
                  key={cat.uri}
                  value={cat.uri}
                  onSelect={(currentValue) => {
                    dispatch(
                      setSearchCategory(
                        currentValue === searchCategory ? "" : currentValue
                      )
                    );
                    setOpen(false);
                  }}
                >
                  {cat.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      searchCategory === cat.uri ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
