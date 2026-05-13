// question 1

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return await response.json();
}

// question 2

enum Role {
  Admin,
  Editor,
  Guest,
}

const PermissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false,
};

// question 3

type TaskStatus = "Open" | "InProgress" | "Closed";

function handleTask(status: TaskStatus) {
  switch (status) {
    case "Open":
      console.log("Open");
      break;

    case "InProgress":
      console.log("Working");
      break;

    case "Closed":
      console.log("Done");
      break;

    default:
      const check: never = status;
      return check;
  }
}

// question 4

type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

// question 5

type MarginValue =
  | `${number}px`
  | `${number}rem`
  | `${number}vh`;

// Valid
const a: MarginValue = "10px";
const b: MarginValue = "2rem";

//question 6

type UnwrapPromise<T> =
  T extends Promise<infer U> ? U : T;

// question 7

type AllEvents =
  | "click"
  | "dbclick"
  | "submit"
  | "reset"
  | "keypress";

type MouseEvents =
  Extract<AllEvents, "click" | "dbclick">;

type NonFormEvents =
  Exclude<AllEvents, "submit" | "reset">;

  // question 8
//doing