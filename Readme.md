| HTTP Method       | URI PATH                                | Description                       | JSON |
| ----------------- | --------------------------------------- | --------------------------------- | ---- |
| GET               | `/`                                     | Index page                        |      |
| GET               | `/users/create`                         | Create users                      |      |
| POST              | `/users/create`                         | Create users                      |      |
| GET               | `/users/list`                           | List of all users                 |      |
| GET               | `/users/:id`                            | Specific user                     |      |
| GET               | `/users/:id/edit`                       | Update user                       |      |
| POST              | `/users/:id/edit`                       | Update user                       |      |
| POST              | `/users/:id/delete`                     | Delete                            |      |
| GET               | `/users/:id/recomendation`              | List of recomendation             | Yes  |
| POST              | `/users/:id/recomendation`              | List of recomendation             | Yes  |
| POST              | `/users/:id/recomendation/delete`       | Delete recomendation              | Yes  |
| GET               | `/log-in`                               | User login                        |      |
| POST              | `/log-in`                               | User login                        |      |
| GET               | `/movies/random`                        | List random movies                | Yes  |
| GET               | `/movies/search?q{keywords}`            | Searcher movies                   | Yes  |
| POST              | `/admin/create-movies`                  | Create movies                     |      |
| ----------------- | --------------------------------------- | --------------------------------- | ---- |
