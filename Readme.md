| HTTP Method       | URI PATH                                | Description                       | JSON |
| ----------------- | --------------------------------------- | --------------------------------- | ---- |
| GET               | `/`                                     | Index page                        |      |
| GET               | `/users/create`                         | Create users                      |      |
| POST              | `/users/create`                         | Create users                      |      |
| GET               | `/users/list`                           | List of all users                 |      |
| GET               | `/users/{user_id}`                      | Specific user                     |      |
| GET               | `/users/{user_id}/edit`                 | Update user                       |      |
| POST              | `/users/{user_id}/edit`                 | Update user                       |      |
| POST              | `/users/{user_id}/delete`               | Delete                            |      |
| GET               | `/users/{user_id}/recomendation`        | List of recomendation             |      |
| POST              | `/users/{user_id}/recomendation`        | List of recomendation             |      |
| POST              | `/users/{user_id}/recomendation/delete` | Delete recomendation              |      |
| GET               | `/log-in`                               | User login                        |      |
| POST              | `/log-in`                               | User login                        |      |
| GET               | `/movies/random`                        | List random movies                | Yes  |
| GET               | `/movies/search?q{keywords}`            | User login                        | Yes  |
| POST              | `/admin/create-movies`                  | Create movies                     |      |
| ----------------- | --------------------------------------- | --------------------------------- | ---- |
