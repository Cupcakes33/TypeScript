{
  // Readonly
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    //...
  }
  // Readonly, Required 같은 자주 쓸 것 같은 타입을 아주아주 친절한 타입스크립트 개발자 분들이 이미 유틸리티 타입으로 지정해놓았다 !
}

{
  // Partial
  // 주어진 타입의 모든 프로퍼티를 Optional 로 변경.
  // 기존의 타입에서 부분적으로만 변경하고 싶을 때

  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
    contents: string;
  };

  type Post = {
    id: number;
    title: string;
    createdAt: Date;
    username: string;
    content: string;
    likesCount: number;
    likes: string[];
    commentsCount: number;
    comments: Comment[];
  };

  type PostMetaData = StrintOmit<Post, "content" | "likes" | "comments">;

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return {
      ...todo,
      ...fieldsToUpdate,
    };
  }

  // Pick
  // 주어진 타입에서 특정 프로퍼티만 선택하여 새로운 타입을 만든다.

  type TodoMetaData = Pick<Partial<Todo>, "title" | "label">;

  // Omit
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

  // Pick 의 반대. 특정 타입에서 몇몇 속성을 제거한 새로운 타입을 만들기.
  type StrintOmit<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P];
  };

  type NotContentsTodo = Omit<Todo, "contents">;
}

{
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Title" },
  };

  type Pages = {
    
  }
}
