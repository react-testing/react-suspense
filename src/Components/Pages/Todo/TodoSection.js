import { memo } from "react";
import Nav from "react-bootstrap/Nav";
import { useCurrentSectionId } from "./context/CurrentSectionIdProvider";
import css from "../../css/todo.module.css";

function TodoSection({ id, name, icon, tasks }) {
  const { sectionId, setSectionid } = useCurrentSectionId();
  const classNameActive = id === sectionId ? " " + css.todoNavItemActive : "";
  return (
    <Nav.Item
      as={Nav.Link}
      className={`${css.todoNavItem}${classNameActive}`}
      onClick={() => setSectionid(id)}
    >
      <i className={`fa fa-${icon} mr-1`} />
      <span>{name}</span>
      <span className={css.todoNavItemCount}>{tasks}</span>
    </Nav.Item>
  );
}
export default memo(TodoSection);
