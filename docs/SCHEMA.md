
users: {
  // users/:user_id
  @user_id: ...
  @user_id: ...
  @user_id: ...
  @user_id: {
    // users/:user_id/profile
    profile: {
      username: %username%
      fullName: %fullName%
      createdAt: Date
      updatedAt: Date 
    }
    // users/:user_id/tutorials
    tutorials: {
      @tutoria_id: true
      @tutoria_id: true
      @tutoria_id: true
    }
    // users/:user_id/comments
    comments: {
      @comment_id: true
      @comment_id: true
      @comment_id: true
    }
    // users/:user_id/projects
    projects: {
      @project_id: true
      @project_id: true
      @project_id: true
    }
  }
}

tutorials: {
  // tutorials/:tutorial_id
  @tutorial_id: ...
  @tutorial_id: ...
  @tutorial_id: ...
  @tutorial_id: {
    // tutorials/:tutorial_id/data
    data: {
      title: %title%
      content: %content%
      contentHtml: %contentHtml%
      source: %source%
      domain: %domain%
      keywords: [%keyword%, %keyword%]
      createdAt: Date
      updatedAt: Date 
      author: @user_id
    }
    // tutorials/:tutorial_id/comments
    comments: {
      @comment_id: true
      @comment_id: true
      @comment_id: true
    }
    // tutorials/:tutorial_id/languages
    languages: {
      @language_id: true
      @language_id: true
      @language_id: true
    }
    // tutorials/:tutorial_id/projects
    projects: {
      @project_id: true
      @project_id: true
      @project_id: true
    }
  }
}

comments: {
  // comments/:comment_id
  @comment_id: ...
  @comment_id: ...
  @comment_id: ...
  @comment_id: {
    // comments/:comment_id/data
    data: {
      content: %content%
      contentHtml: %contentHtml%
      author: @user_id
      tutorial: @tutorial_id
      createdAt: Date
      updatedAt: Date 
    }
  }
}

languages: {
  // languages/:language_id
  @language_id: ...
  @language_id: ...
  @language_id: ...
  @language_id: {
    // languages/:language_id/data
    data: {
      name: %name%
      slug: %slug%
    }
    // languages/:language_id/projects
    projects: {
      @project_id: true
      @project_id: true
      @project_id: true
    }
    // languages/:language_id/tutorials
    tutorials: {
      @tutoria_id: true
      @tutoria_id: true
      @tutoria_id: true
    }
  }
}

projects: {
  // projects/:project_id
  @project_id: ...
  @project_id: ...
  @project_id: ...
  @project_id: {
    // projects/:project_id/data
    data: {
      name: %name%
      slug: %name%
      description: %description%
      homepage: %homepage%
      repository: %repository%
      keywords: [%keyword%, %keyword%]
      author: @user_id
      createdAt: Date
      updatedAt: Date 
    }
    // projects/:project_id/tutorials
    tutorials: {
      @tutoria_id: true
      @tutoria_id: true
      @tutoria_id: true
    }
    // projects/:project_id/languages
    languages: {
      @language_id: true
      @language_id: true
      @language_id: true
    }
  }
}

// homepage
homepage: {
  // Последние 20 уроков
  // homepage/tutorials
  tutorials: {
    @tutoria_id: true
    @tutoria_id: true
    @tutoria_id: true
  }
  // 20 популярных проектов
  // homepage/projects
  projects: {
    @project_id: true
    @project_id: true
    @project_id: true
  }
  // 20 популярных языков программирования
  // homepage/languages
  languages: {
    @language_id: true
    @language_id: true
    @language_id: true
  }
}

// search
search: {
  // search/tutorials
  tutorials: {
    @tutoria_id: true
    @tutoria_id: true
    @tutoria_id: true
  }
  // search/projects
  projects: {
    @project_id: true
    @project_id: true
    @project_id: true
  }
  // search/languages
  languages: {
    @language_id: true
    @language_id: true
    @language_id: true
  } 
}

pages: {
  // pages/:page_id
  @page_id: ...
  @page_id: ...
  @page_id: ...
  @page_id: %text%
}




