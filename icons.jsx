// Lucide-style line icons, 24px, 1.5px stroke — to match TOV functional icon style
const _Ic = (props) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24, height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props,
});

function SearchIcon(p)  { return <svg {..._Ic(p)}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>; }
function DrawerIcon(p)  { return <svg {..._Ic(p)}><path d="M3 6h18M3 12h18M3 18h18"/></svg>; }
function ChevRightIcon(p){return <svg {..._Ic(p)}><path d="m9 6 6 6-6 6"/></svg>; }
function ChevDownIcon(p) {return <svg {..._Ic(p)}><path d="m6 9 6 6 6-6"/></svg>; }
function PhoneCircleIcon(p){return <svg {..._Ic(p)}><circle cx="12" cy="12" r="9"/><path d="M9 8.5c0 4 2.5 6.5 6.5 6.5l-1.5 1.5-2-1-1.5 1.5-1.5-1.5 1.5-1.5-1-2L8.5 10z"/></svg>; }
function CloseIcon(p)   { return <svg {..._Ic(p)}><path d="M18 6 6 18M6 6l12 12"/></svg>; }
function CheckIcon(p)   { return <svg {..._Ic(p)}><path d="m5 12 5 5L20 7"/></svg>; }
function ArrowRightIcon(p){return <svg {..._Ic(p)}><path d="M5 12h14M13 5l7 7-7 7"/></svg>; }
function MapPinIcon(p)  { return <svg {..._Ic(p)}><path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function CalendarIcon(p){ return <svg {..._Ic(p)}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>; }
function ClockIcon(p)   { return <svg {..._Ic(p)}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>; }
function UsersIcon(p)   { return <svg {..._Ic(p)}><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 20a5 5 0 0 1 5.5-4.9"/></svg>; }
function MessageIcon(p) { return <svg {..._Ic(p)}><path d="M21 12a8 8 0 0 1-11 7.5L4 21l1.5-5A8 8 0 1 1 21 12z"/></svg>; }
function SparkIcon(p)   { return <svg {..._Ic(p)}><path d="m12 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>; }
function StarIcon(p)    { return <svg {..._Ic(p)}><path d="m12 3 2.7 6.1 6.7.6-5 4.5 1.5 6.6L12 17.5 6.1 20.8l1.5-6.6-5-4.5 6.7-.6z" fill="currentColor"/></svg>; }
function PlayIcon(p)    { return <svg {..._Ic(p)} fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>; }
function FigmaIcon(p)   { return <svg {..._Ic(p)} stroke="none" fill="currentColor"><path d="M8.5 2a3.5 3.5 0 0 0 0 7H12V2H8.5zM12 2v7h3.5a3.5 3.5 0 1 0 0-7H12zm0 7H8.5a3.5 3.5 0 0 0 0 7H12V9zm0 0v7h3.5A3.5 3.5 0 1 0 12 9zM8.5 16a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 3.5-3.5V16H8.5z" opacity=".8"/></svg>; }
function BookmarkIcon(p){ return <svg {..._Ic(p)}><path d="M6 4h12v18l-6-4-6 4z"/></svg>; }

Object.assign(window, {
  SearchIcon, DrawerIcon, ChevRightIcon, ChevDownIcon, PhoneCircleIcon,
  CloseIcon, CheckIcon, ArrowRightIcon, MapPinIcon, CalendarIcon, ClockIcon,
  UsersIcon, MessageIcon, SparkIcon, StarIcon, PlayIcon, FigmaIcon, BookmarkIcon,
});
