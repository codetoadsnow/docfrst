---
id: doc-markdown
title: SQL
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown
sidebar_position: 1
pagination_label: Markdown features
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
docId: 'main'
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /myDoc
last_update:
  date: 1/1/2000
  author: custom author name
---

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

# Display h1 to h5 headings
toc_min_heading_level: 1
toc_max_heading_level: 5

# Примеры работ с Big Query

```sql title="/src/components/HelloCodeTitle.js"
SELECT EXTRACT(MONTH FROM safe_CAST(date AS DATE)) AS date1
FROM `graphic-segment-300420.GEELY_MSK_AKS.dir_ct_2022_11`
```
# Создание и удаление таблиц
# Выборка данных

## Оператор _LIKE_  
### 2 и более слов
Вывести название и автора тех книг, название которых состоит из двух и более слов, а инициалы автора содержат букву «С»
```sql title="/src/components/HelloCodeTitle.js"
SELECT title, author  
FROM book  
WHERE title LIKE '_% _%'  
AND (author LIKE "% С._." OR author LIKE "% _.С.")  
ORDER BY title;  
```
:::tip My tip

| title                 | author      |
| --------------------- | ----------- |
| Капитанская дочка     | Пушкин А.С. |
| Стихотворения и поэмы | Есенин С.А. |
:::

### Одно слово
Вывести названия книг, которые состоят ровно из одного слова, если считать, что слова в назв. отд. друг от друга пробелами
```sql title="/src/components/HelloCodeTitle.js"
SELECT title FROM book WHERE title NOT LIKE "% %";  
```


| title  |
| ------ |
| Идиот  |
| Поэмы  |
| Лирика |

##### Вывести имена людей, которые заканчиваются на "man"
```SQL  
SELECT name FROM Passenger
WHERE name LIKE "%_man"
```
![[Pasted image 20230222113747.png]]
##### Вывести количество рейсов, совершенных на TU-134
```SQL 
SELECT COUNT(*) as count
FROM Trip
WHERE plane ='TU-134'
```
#SQL/COUNT
##### Какие компании совершали перелеты на Boeing
```SQL 
SELECT name FROM Company
WHERE id IN (
 SELECT company
 FROM Trip
 WHERE plane = "Boeing"
)
```
#SQL/subquery


#### Функция _TIMEDIFF_  
##### В какие города можно улететь из Парижа (Paris) и сколько времени это займёт?
```SQL
SELECT town_to, TIMEDIFF(time_in, time_out) AS flight_time
FROM Trip
WHERE town_from = 'Paris';
```
#SQL/TIMEDIFF 


```python title="Get sheet as df"
import pygsheets
import pandas as pd

def auth_google_sheets():
    # авторизуемся
    path = "/content/drive/MyDrive/KeysCollab/key.json"
    gc = pygsheets.authorize(service_account_file=path)
    # получаем таблицу
    sh = gc.open("Тестовый Дашборд по клиентам")
    # получаем лист
    wk_sh = sh.worksheet('title','accs_and_counters')

    return wk_sh
wk_sh =  auth_google_sheets()
read = wk_sh.get_as_df()
print(read.head())
```



Операторы используется для описания условий в SQL выражении и для обслуживания группы SQL выражений. В языке структурированных запросов SQL существует четыре типа операторов: Арифметические операторы Операторы сравнения Логические операторы Операторы, которые отрабатывают, если условие не выполняется.

найдено на [proselyte.net](https://proselyte.net/tutorials/sql/sql-operators/)

Функция SQL — это набор операторов SQL, которые принимают входные данные и выполняют с ними действия SQL, а затем возвращают результаты в виде выходных данных. В SQL есть два типа функций: функции set и функции value. Функция, которая манипулирует строками данных в таблице и возвращает одно значение, называется функцией set.