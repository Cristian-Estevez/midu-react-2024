import { BUTTON, EVENTS, TARGETS } from "./constants";

export function navigate(href: string) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export default function Link(
  props: React.HTMLAttributes<HTMLAnchorElement> & {
    target?: "_blank" | "_parent" | "_self" | "_top";
    to: string;
  }
) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = event.button === BUTTON.PRIMARY;
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent =
      props.target === undefined || props.target === TARGETS.SELF;

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(props.to);
    }
  };
  return (
    <a onClick={handleClick} href={props.to} target={props.target} {...props} />
  );
}
