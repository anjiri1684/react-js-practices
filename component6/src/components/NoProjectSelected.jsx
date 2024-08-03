import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 tex-center w-2/3">
      <img
        src={noProjectImg}
        className="w-16 h-16 object-contain mx-auto"
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Selected a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}
