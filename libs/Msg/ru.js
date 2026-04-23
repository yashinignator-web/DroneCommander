/* eslint-disable */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    var messages = factory();
    for (var key in messages) {
      root.Blockly.Msg[key] = messages[key];
    }
  }
}(this, function() {

'use strict';

var Blockly = Blockly || { Msg: Object.create(null) };

// ============================================
// РУССКИЙ ПЕРЕВОД ДЛЯ DRONE COMMANDER
// ============================================

Blockly.Msg["ADD_COMMENT"] = "Добавить комментарий";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "Нельзя удалить переменную '%1', так как она является частью определения функции '%2'";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "Изменить значение:";
Blockly.Msg["CLEAN_UP"] = "Очистить блоки";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "Свернутые блоки содержат предупреждения.";
Blockly.Msg["COLLAPSE_ALL"] = "Свернуть блоки";
Blockly.Msg["COLLAPSE_BLOCK"] = "Свернуть блок";
Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "цвет 1";
Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "цвет 2";
Blockly.Msg["COLOUR_BLEND_HELPURL"] = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
Blockly.Msg["COLOUR_BLEND_RATIO"] = "доля";
Blockly.Msg["COLOUR_BLEND_TITLE"] = "смешать";
Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Смешивает два цвета в заданной пропорции (0.0 - 1.0).";
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://ru.wikipedia.org/wiki/Цвет";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Выберите цвет из палитры.";
Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";
Blockly.Msg["COLOUR_RANDOM_TITLE"] = "случайный цвет";
Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Выбрать цвет случайно.";
Blockly.Msg["COLOUR_RGB_BLUE"] = "синего";
Blockly.Msg["COLOUR_RGB_GREEN"] = "зеленого";
Blockly.Msg["COLOUR_RGB_HELPURL"] = "https://www.december.com/html/spec/colorpercompact.html";
Blockly.Msg["COLOUR_RGB_RED"] = "красного";
Blockly.Msg["COLOUR_RGB_TITLE"] = "цвет из";
Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Создать цвет с указанным количеством красного, зеленого и синего. Все значения должны быть от 0 до 100.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK"] = "выйти из цикла";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE"] = "перейти к следующему шагу цикла";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "Прервать выполнение цикла.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "Пропустить остаток цикла и перейти к следующей итерации.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "Предупреждение: этот блок может использоваться только внутри цикла.";
Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#for-each";
Blockly.Msg["CONTROLS_FOREACH_TITLE"] = "для каждого элемента %1 в списке %2";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "Для каждого элемента в списке присвоить переменной '%1' значение элемента и выполнить некоторые действия.";
Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#count-with";
Blockly.Msg["CONTROLS_FOR_TITLE"] = "цикл с %1 от %2 до %3 шаг %4";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "Присвоить переменной '%1' значения от начального до конечного с заданным шагом и выполшить указанные блоки.";
Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "Добавить условие к блоку 'если'.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "Добавить завершающее условие к блоку 'если'.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://github.com/google/blockly/wiki/IfElse";
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "Добавить, удалить или переставить секции для перенастройки блока 'если'.";
Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "иначе";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "иначе если";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "если";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "Если значение истина, то выполнить некоторые действия.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "Если значение истина, то выполнить первый блок действий. Иначе выполнить второй блок.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "Если первое значение истина, то выполнить первый блок действий. Иначе, если второе значение истина, то выполнить второй блок.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "Если первое значение истина, то выполнить первый блок. Иначе, если второе значение истина, то выполнить второй блок. Если ни одно из значений не истинно, выполнить последний блок.";
Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://ru.wikipedia.org/wiki/Цикл_(программирование)";
Blockly.Msg["CONTROLS_REPEAT_INPUT_DO"] = "выполнить";
Blockly.Msg["CONTROLS_REPEAT_TITLE"] = "повторить %1 раз";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "Выполнить некоторые действия несколько раз.";
Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://github.com/google/blockly/wiki/Loops#repeat";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_UNTIL"] = "повторять пока не";
Blockly.Msg["CONTROLS_WHILEUNTIL_OPERATOR_WHILE"] = "повторять пока";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "Пока значение ложно, выполнять некоторые действия.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "Пока значение истинно, выполнять некоторые действия.";
Blockly.Msg["DELETE_ALL_BLOCKS"] = "Удалить все %1 блоков?";
Blockly.Msg["DELETE_BLOCK"] = "Удалить блок";
Blockly.Msg["DELETE_VARIABLE"] = "Удалить переменную '%1'";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "Удалить %1 использований переменной '%2'?";
Blockly.Msg["DELETE_X_BLOCKS"] = "Удалить %1 блоков";
Blockly.Msg["DIALOG_CANCEL"] = "Отмена";
Blockly.Msg["DIALOG_OK"] = "OK";
Blockly.Msg["DISABLE_BLOCK"] = "Отключить блок";
Blockly.Msg["DUPLICATE_BLOCK"] = "Дублировать";
Blockly.Msg["DUPLICATE_COMMENT"] = "Продублировать комментарий";
Blockly.Msg["ENABLE_BLOCK"] = "Включить блок";
Blockly.Msg["EXPAND_ALL"] = "Развернуть блоки";
Blockly.Msg["EXPAND_BLOCK"] = "Развернуть блок";
Blockly.Msg["EXTERNAL_INPUTS"] = "Внешние входы";
Blockly.Msg["HELP"] = "Справка";
Blockly.Msg["INLINE_INPUTS"] = "Внутренние входы";
Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg["LISTS_CREATE_EMPTY_TITLE"] = "создать пустой список";
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "Возвращает список длиной 0, не содержащий данных";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "список";
Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Добавить, удалить или переставить секции для настройки этого блока списка.";
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"] = "создать список из";
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Добавить элемент в список.";
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "Создать список с любым количеством элементов.";
Blockly.Msg["LISTS_GET_INDEX_FIRST"] = "первый";
Blockly.Msg["LISTS_GET_INDEX_FROM_END"] = "№ с конца";
Blockly.Msg["LISTS_GET_INDEX_FROM_START"] = "№";
Blockly.Msg["LISTS_GET_INDEX_GET"] = "получить";
Blockly.Msg["LISTS_GET_INDEX_GET_REMOVE"] = "получить и удалить";
Blockly.Msg["LISTS_GET_INDEX_LAST"] = "последний";
Blockly.Msg["LISTS_GET_INDEX_RANDOM"] = "случайный";
Blockly.Msg["LISTS_GET_INDEX_REMOVE"] = "удалить";
Blockly.Msg["LISTS_GET_INDEX_TAIL"] = "";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "Возвращает первый элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "Возвращает элемент в указанной позиции списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "Возвращает последний элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "Возвращает случайный элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "Удаляет и возвращает первый элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "Удаляет и возвращает элемент в указанной позиции списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "Удаляет и возвращает последний элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "Удаляет и возвращает случайный элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "Удаляет первый элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "Удаляет элемент в указанной позиции списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "Удаляет последний элемент списка.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "Удаляет случайный элемент списка.";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_END"] = "до № с конца";
Blockly.Msg["LISTS_GET_SUBLIST_END_FROM_START"] = "до №";
Blockly.Msg["LISTS_GET_SUBLIST_END_LAST"] = "до последнего";
Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
Blockly.Msg["LISTS_GET_SUBLIST_START_FIRST"] = "получить подсписок с первого";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_END"] = "получить подсписок с № с конца";
Blockly.Msg["LISTS_GET_SUBLIST_START_FROM_START"] = "получить подсписок с №";
Blockly.Msg["LISTS_GET_SUBLIST_TAIL"] = "";
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "Создает копию указанной части списка.";
Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1 - последний элемент.";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1 - первый элемент.";
Blockly.Msg["LISTS_INDEX_OF_FIRST"] = "найти первое вхождение элемента";
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
Blockly.Msg["LISTS_INDEX_OF_LAST"] = "найти последнее вхождение элемента";
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "Возвращает индекс первого/последнего вхождения элемента в список. Возвращает %1, если элемент не найден.";
Blockly.Msg["LISTS_INLIST"] = "в списке";
Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";
Blockly.Msg["LISTS_ISEMPTY_TITLE"] = "%1 пуст";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "Возвращает истину, если список пуст.";
Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";
Blockly.Msg["LISTS_LENGTH_TITLE"] = "длина %1";
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "Возвращает длину списка.";
Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg["LISTS_REPEAT_TITLE"] = "создать список из элемента %1 повторяющегося %2 раз";
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "Создает список, состоящий из заданного значения, повторяющегося заданное количество раз.";
Blockly.Msg["LISTS_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
Blockly.Msg["LISTS_REVERSE_MESSAGE0"] = "развернуть %1";
Blockly.Msg["LISTS_REVERSE_TOOLTIP"] = "Разворачивает копию списка.";
Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";
Blockly.Msg["LISTS_SET_INDEX_INPUT_TO"] = "как";
Blockly.Msg["LISTS_SET_INDEX_INSERT"] = "вставить в";
Blockly.Msg["LISTS_SET_INDEX_SET"] = "присвоить";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "Вставляет элемент в начало списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "Вставляет элемент на указанную позицию списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "Добавляет элемент в конец списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "Вставляет элемент в случайное место списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "Присваивает значение первому элементу списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "Присваивает значение элементу на указанной позиции списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "Присваивает значение последнему элементу списка.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "Присваивает значение случайному элементу списка.";
Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
Blockly.Msg["LISTS_SORT_ORDER_ASCENDING"] = "по возрастанию";
Blockly.Msg["LISTS_SORT_ORDER_DESCENDING"] = "по убыванию";
Blockly.Msg["LISTS_SORT_TITLE"] = "сортировать %1 %2 %3";
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "Сортировать копию списка.";
Blockly.Msg["LISTS_SORT_TYPE_IGNORECASE"] = "по алфавиту (без учета регистра)";
Blockly.Msg["LISTS_SORT_TYPE_NUMERIC"] = "числовая";
Blockly.Msg["LISTS_SORT_TYPE_TEXT"] = "по алфавиту";
Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
Blockly.Msg["LISTS_SPLIT_LIST_FROM_TEXT"] = "создать список из текста";
Blockly.Msg["LISTS_SPLIT_TEXT_FROM_LIST"] = "собрать текст из списка";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "Соединяет список текстов в один текст с разделителем.";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "Разбивает текст в список текстов по разделителю.";
Blockly.Msg["LISTS_SPLIT_WITH_DELIMITER"] = "с разделителем";
Blockly.Msg["LOGIC_BOOLEAN_FALSE"] = "ложь";
Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#values";
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "Возвращает истину или ложь.";
Blockly.Msg["LOGIC_BOOLEAN_TRUE"] = "истина";
Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://ru.wikipedia.org/wiki/Неравенство";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "Возвращает истину, если оба входа равны друг другу.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "Возвращает истину, если первый вход больше второго.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "Возвращает истину, если первый вход больше или равен второму.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "Возвращает истину, если первый вход меньше второго.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "Возвращает истину, если первый вход меньше или равен второму.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "Возвращает истину, если оба входа не равны друг другу.";
Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#not";
Blockly.Msg["LOGIC_NEGATE_TITLE"] = "не %1";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "Возвращает истину, если вход ложен. Возвращает ложь, если вход истинен.";
Blockly.Msg["LOGIC_NULL"] = "ничто";
Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://ru.wikipedia.org/wiki/Nullable_type";
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "Возвращает ничто.";
Blockly.Msg["LOGIC_OPERATION_AND"] = "и";
Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://github.com/google/blockly/wiki/Logic#logical-operations";
Blockly.Msg["LOGIC_OPERATION_OR"] = "или";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "Возвращает истину, если оба входа истинны.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "Возвращает истину, если хотя бы один из входов истинен.";
Blockly.Msg["LOGIC_TERNARY_CONDITION"] = "условие";
Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://ru.wikipedia.org/wiki/Тернарная_условная_операция";
Blockly.Msg["LOGIC_TERNARY_IF_FALSE"] = "если ложь";
Blockly.Msg["LOGIC_TERNARY_IF_TRUE"] = "если истина";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "Проверяет условие в 'условие'. Если условие истинно, возвращает значение 'если истина', иначе возвращает 'если ложь'.";
Blockly.Msg["MATH_ADDITION_SYMBOL"] = "+";
Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://ru.wikipedia.org/wiki/Арифметика";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "Возвращает сумму двух чисел.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "Возвращает частное от деления первого числа на второе.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "Возвращает разность двух чисел.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "Возвращает произведение двух чисел.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "Возвращает первое число, возведённое в степень второго числа.";
Blockly.Msg["MATH_ATAN2_HELPURL"] = "https://ru.wikipedia.org/wiki/Atan2";
Blockly.Msg["MATH_ATAN2_TITLE"] = "atan2 X:%1 Y:%2";
Blockly.Msg["MATH_ATAN2_TOOLTIP"] = "Возвращает арктангенс точки (X, Y) в градусах от -180 до 180.";
Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://ru.wikipedia.org/wiki/Идиома_программирования";
Blockly.Msg["MATH_CHANGE_TITLE"] = "увеличить %1 на %2";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "Прибавляет число к переменной '%1'.";
Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://ru.wikipedia.org/wiki/Математическая_константа";
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "Возвращает одну из распространённых констант: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), или ∞ (бесконечность).";
Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://ru.wikipedia.org/wiki/Ограничение_(математика)";
Blockly.Msg["MATH_CONSTRAIN_TITLE"] = "ограничить %1 снизу %2 сверху %3";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "Ограничивает число нижней и верхней границами (включительно).";
Blockly.Msg["MATH_DIVISION_SYMBOL"] = "÷";
Blockly.Msg["MATH_IS_DIVISIBLE_BY"] = "делится на";
Blockly.Msg["MATH_IS_EVEN"] = "чётное";
Blockly.Msg["MATH_IS_NEGATIVE"] = "отрицательное";
Blockly.Msg["MATH_IS_ODD"] = "нечётное";
Blockly.Msg["MATH_IS_POSITIVE"] = "положительное";
Blockly.Msg["MATH_IS_PRIME"] = "простое";
Blockly.Msg["MATH_IS_TOOLTIP"] = "Проверяет, является ли число чётным, нечётным, простым, целым, положительным, отрицательным или делится ли оно на другое число. Возвращает истину или ложь.";
Blockly.Msg["MATH_IS_WHOLE"] = "целое";
Blockly.Msg["MATH_MODULO_HELPURL"] = "https://ru.wikipedia.org/wiki/Деление_с_остатком";
Blockly.Msg["MATH_MODULO_TITLE"] = "остаток от %1 ÷ %2";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "Возвращает остаток от деления двух чисел.";
Blockly.Msg["MATH_MULTIPLICATION_SYMBOL"] = "×";
Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://ru.wikipedia.org/wiki/Число";
Blockly.Msg["MATH_NUMBER_TOOLTIP"] = "Число.";
Blockly.Msg["MATH_ONLIST_HELPURL"] = "";
Blockly.Msg["MATH_ONLIST_OPERATOR_AVERAGE"] = "среднее списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_MAX"] = "максимум списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_MEDIAN"] = "медиана списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_MIN"] = "минимум списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_MODE"] = "мода списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_RANDOM"] = "случайный элемент списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_STD_DEV"] = "стандартное отклонение списка";
Blockly.Msg["MATH_ONLIST_OPERATOR_SUM"] = "сумма списка";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "Возвращает среднее арифметическое чисел в списке.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "Возвращает наибольшее число в списке.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "Возвращает медиану списка.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "Возвращает наименьшее число в списке.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "Возвращает список наиболее часто встречающихся элементов списка.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "Возвращает случайный элемент из списка.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "Возвращает стандартное отклонение списка.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "Возвращает сумму всех чисел в списке.";
Blockly.Msg["MATH_POWER_SYMBOL"] = "^";
Blockly.Msg["MATH_RANDOM_FLOAT_HELPURL"] = "https://ru.wikipedia.org/wiki/Генератор_случайных_чисел";
Blockly.Msg["MATH_RANDOM_FLOAT_TITLE_RANDOM"] = "случайная дробь";
Blockly.Msg["MATH_RANDOM_FLOAT_TOOLTIP"] = "Возвращает случайную дробь от 0.0 (включительно) до 1.0 (исключительно).";
Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://ru.wikipedia.org/wiki/Генератор_случайных_чисел";
Blockly.Msg["MATH_RANDOM_INT_TITLE"] = "случайное целое от %1 до %2";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "Возвращает случайное целое число между заданными пределами (включительно).";
Blockly.Msg["MATH_ROUND_HELPURL"] = "https://ru.wikipedia.org/wiki/Округление";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUND"] = "округлить";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDDOWN"] = "округлить вниз";
Blockly.Msg["MATH_ROUND_OPERATOR_ROUNDUP"] = "округлить вверх";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "Округляет число в большую или меньшую сторону.";
Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://ru.wikipedia.org/wiki/Квадратный_корень";
Blockly.Msg["MATH_SINGLE_OP_ABSOLUTE"] = "модуль";
Blockly.Msg["MATH_SINGLE_OP_ROOT"] = "квадратный корень";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "Возвращает модуль числа.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "Возвращает e в степени числа.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "Возвращает натуральный логарифм числа.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "Возвращает десятичный логарифм числа.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "Возвращает противоположное число.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "Возвращает 10 в степени числа.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "Возвращает квадратный корень числа.";
Blockly.Msg["MATH_SUBTRACTION_SYMBOL"] = "-";
Blockly.Msg["MATH_TRIG_ACOS"] = "acos";
Blockly.Msg["MATH_TRIG_ASIN"] = "asin";
Blockly.Msg["MATH_TRIG_ATAN"] = "atan";
Blockly.Msg["MATH_TRIG_COS"] = "cos";
Blockly.Msg["MATH_TRIG_HELPURL"] = "https://ru.wikipedia.org/wiki/Тригонометрические_функции";
Blockly.Msg["MATH_TRIG_SIN"] = "sin";
Blockly.Msg["MATH_TRIG_TAN"] = "tan";
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "Возвращает арккосинус числа.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "Возвращает арксинус числа.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "Возвращает арктангенс числа.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "Возвращает косинус угла в градусах.";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "Возвращает синус угла в градусах.";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "Возвращает тангенс угла в градусах.";
Blockly.Msg["NEW_COLOUR_VARIABLE"] = "Создать цветовую переменную...";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "Создать числовую переменную...";
Blockly.Msg["NEW_STRING_VARIABLE"] = "Создать строковую переменную...";
Blockly.Msg["NEW_VARIABLE"] = "Создать переменную...";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "Имя новой переменной:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "Тип новой переменной:";
Blockly.Msg["ORDINAL_NUMBER_SUFFIX"] = "";
Blockly.Msg["PROCEDURES_ALLOW_STATEMENTS"] = "разрешить действия";
Blockly.Msg["PROCEDURES_BEFORE_PARAMS"] = "с:";
Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://ru.wikipedia.org/wiki/Подпрограмма";
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "Запустить функцию '%1', определённую пользователем.";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://ru.wikipedia.org/wiki/Подпрограмма";
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "Запустить функцию '%1', определённую пользователем, и использовать её вывод.";
Blockly.Msg["PROCEDURES_CALL_BEFORE_PARAMS"] = "с:";
Blockly.Msg["PROCEDURES_CREATE_DO"] = "Создать '%1'";
Blockly.Msg["PROCEDURES_DEFNORETURN_COMMENT"] = "Опишите эту функцию...";
Blockly.Msg["PROCEDURES_DEFNORETURN_DO"] = "";
Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://ru.wikipedia.org/wiki/Подпрограмма";
Blockly.Msg["PROCEDURES_DEFNORETURN_PROCEDURE"] = "выполнить действие";
Blockly.Msg["PROCEDURES_DEFNORETURN_TITLE"] = "определить";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "Создаёт функцию без вывода.";
Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://ru.wikipedia.org/wiki/Подпрограмма";
Blockly.Msg["PROCEDURES_DEFRETURN_RETURN"] = "вернуть";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "Создаёт функцию с выводом.";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "Внимание: в этой функции есть повторяющиеся параметры.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "Подсветить определение функции";
Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "Если значение истинно, то вернуть второе значение.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "Внимание: этот блок может использоваться только внутри определения функции.";
Blockly.Msg["PROCEDURES_MUTATORARG_TITLE"] = "имя входа:";
Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "Добавить входной параметр в функцию.";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TITLE"] = "параметры";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "Добавить, удалить или изменить порядок параметров функции.";
Blockly.Msg["REDO"] = "Повторить";
Blockly.Msg["REMOVE_COMMENT"] = "Удалить комментарий";
Blockly.Msg["RENAME_VARIABLE"] = "Переименовать переменную...";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "Переименовать все переменные '%1' в:";
Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg["TEXT_APPEND_TITLE"] = "к %1 добавить текст %2";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "Добавить текст к переменной '%1'.";
Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_LOWERCASE"] = "в нижний регистр";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_TITLECASE"] = "в Заглавные Начальные Буквы";
Blockly.Msg["TEXT_CHANGECASE_OPERATOR_UPPERCASE"] = "в ВЕРХНИЙ РЕГИСТР";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "Возвращает копию текста в другом регистре.";
Blockly.Msg["TEXT_CHARAT_FIRST"] = "взять первый символ";
Blockly.Msg["TEXT_CHARAT_FROM_END"] = "взять символ № с конца";
Blockly.Msg["TEXT_CHARAT_FROM_START"] = "взять символ №";
Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";
Blockly.Msg["TEXT_CHARAT_LAST"] = "взять последний символ";
Blockly.Msg["TEXT_CHARAT_RANDOM"] = "взять случайный символ";
Blockly.Msg["TEXT_CHARAT_TAIL"] = "";
Blockly.Msg["TEXT_CHARAT_TITLE"] = "в тексте %1 %2";
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "Возвращает символ на указанной позиции.";
Blockly.Msg["TEXT_COUNT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#counting-substrings";
Blockly.Msg["TEXT_COUNT_MESSAGE0"] = "подсчитать %1 в %2";
Blockly.Msg["TEXT_COUNT_TOOLTIP"] = "Подсчитывает, сколько раз указанный текст встречается в другом тексте.";
Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "Добавить элемент к тексту.";
Blockly.Msg["TEXT_CREATE_JOIN_TITLE_JOIN"] = "соединить";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "Добавить, удалить или переставить секции для настройки этого текстового блока.";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_END"] = "до символа № с конца";
Blockly.Msg["TEXT_GET_SUBSTRING_END_FROM_START"] = "до символа №";
Blockly.Msg["TEXT_GET_SUBSTRING_END_LAST"] = "до последнего символа";
Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
Blockly.Msg["TEXT_GET_SUBSTRING_INPUT_IN_TEXT"] = "в тексте";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FIRST"] = "взять подстроку с первого символа";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_END"] = "взять подстроку с символа № с конца";
Blockly.Msg["TEXT_GET_SUBSTRING_START_FROM_START"] = "взять подстроку с символа №";
Blockly.Msg["TEXT_GET_SUBSTRING_TAIL"] = "";
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "Возвращает указанную часть текста.";
Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_FIRST"] = "найти первое вхождение текста";
Blockly.Msg["TEXT_INDEXOF_OPERATOR_LAST"] = "найти последнее вхождение текста";
Blockly.Msg["TEXT_INDEXOF_TITLE"] = "в тексте %1 %2 %3";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "Возвращает индекс первого/последнего вхождения первого текста во второй. Возвращает %1, если текст не найден.";
Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
Blockly.Msg["TEXT_ISEMPTY_TITLE"] = "%1 пуст";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "Возвращает истину, если указанный текст пуст.";
Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";
Blockly.Msg["TEXT_JOIN_TITLE_CREATEWITH"] = "создать текст из";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "Создаёт текст, объединяя любое количество элементов.";
Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg["TEXT_LENGTH_TITLE"] = "длина %1";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "Возвращает количество символов (включая пробелы) в указанном тексте.";
Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";
Blockly.Msg["TEXT_PRINT_TITLE"] = "напечатать %1";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "Напечатать указанный текст, число или другое значение.";
Blockly.Msg["TEXT_PROMPT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_NUMBER"] = "Запросить у пользователя число.";
Blockly.Msg["TEXT_PROMPT_TOOLTIP_TEXT"] = "Запросить у пользователя текст.";
Blockly.Msg["TEXT_PROMPT_TYPE_NUMBER"] = "запросить число с подсказкой";
Blockly.Msg["TEXT_PROMPT_TYPE_TEXT"] = "запросить текст с подсказкой";
Blockly.Msg["TEXT_REPLACE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#replacing-substrings";
Blockly.Msg["TEXT_REPLACE_MESSAGE0"] = "заменить %1 на %2 в %3";
Blockly.Msg["TEXT_REPLACE_TOOLTIP"] = "Заменяет все вхождения указанного текста в другом тексте.";
Blockly.Msg["TEXT_REVERSE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#reversing-text";
Blockly.Msg["TEXT_REVERSE_MESSAGE0"] = "развернуть %1";
Blockly.Msg["TEXT_REVERSE_TOOLTIP"] = "Разворачивает порядок символов в тексте.";
Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://ru.wikipedia.org/wiki/Строковый_тип";
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "Буква, слово или строка текста.";
Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
Blockly.Msg["TEXT_TRIM_OPERATOR_BOTH"] = "обрезать пробелы с обеих сторон";
Blockly.Msg["TEXT_TRIM_OPERATOR_LEFT"] = "обрезать пробелы слева";
Blockly.Msg["TEXT_TRIM_OPERATOR_RIGHT"] = "обрезать пробелы справа";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "Возвращает копию текста с удалёнными пробелами с одного или обоих концов.";
Blockly.Msg["TODAY"] = "Сегодня";
Blockly.Msg["UNDO"] = "Отменить";
Blockly.Msg["UNNAMED_KEY"] = "безымянный";
Blockly.Msg["VARIABLES_DEFAULT_NAME"] = "элемент";
Blockly.Msg["VARIABLES_GET_CREATE_SET"] = "Создать 'установить %1'";
Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#get";
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "Возвращает значение этой переменной.";
Blockly.Msg["VARIABLES_SET"] = "присвоить %1 = %2";
Blockly.Msg["VARIABLES_SET_CREATE_GET"] = "Создать 'получить %1'";
Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://github.com/google/blockly/wiki/Variables#set";
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "Присваивает переменной значение входного блока.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "Переменная с именем '%1' уже существует.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "Переменная с именем '%1' уже существует для другого типа: '%2'.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER"] = "Переменная с именем '%1' уже существует как параметр в процедуре '%2'.";
Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Рабочая область Blockly";
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Напишите что-нибудь...";

// Цветовые темы
Blockly.Msg["LOGIC_HUE"] = "210";
Blockly.Msg["LOOPS_HUE"] = "120";
Blockly.Msg["MATH_HUE"] = "230";
Blockly.Msg["TEXTS_HUE"] = "160";
Blockly.Msg["LISTS_HUE"] = "260";
Blockly.Msg["COLOUR_HUE"] = "20";
Blockly.Msg["VARIABLES_HUE"] = "330";
Blockly.Msg["VARIABLES_DYNAMIC_HUE"] = "310";
Blockly.Msg["PROCEDURES_HUE"] = "290";

// ============================================
// КОМАНДЫ ДРОНА (Drone Commands)
// ============================================

Blockly.Msg["BKY_DRONE_TAKEOFF"] = "взлететь";
Blockly.Msg["BKY_DRONE_TAKEOFF_TOOLTIP"] = "Дрон взлетает";

Blockly.Msg["BKY_DRONE_LAND"] = "приземлиться";
Blockly.Msg["BKY_DRONE_LAND_TOOLTIP"] = "Дрон приземляется";

Blockly.Msg["BKY_DRONE_SET_ALTITUDE"] = "установить высоту %1";
Blockly.Msg["BKY_DRONE_SET_ALTITUDE_TOOLTIP"] = "Установить высоту дрона";

Blockly.Msg["BKY_DRONE_CHANGE_ALTITUDE"] = "изменить высоту на %1";
Blockly.Msg["BKY_DRONE_CHANGE_ALTITUDE_TOOLTIP"] = "Изменить высоту дрона";

Blockly.Msg["BKY_DRONE_SET_ANGLE"] = "установить угол %1";
Blockly.Msg["BKY_DRONE_SET_ANGLE_TOOLTIP"] = "Установить угол дрона";

Blockly.Msg["BKY_DRONE_CHANGE_ANGLE"] = "повернуть на %1";
Blockly.Msg["BKY_DRONE_CHANGE_ANGLE_TOOLTIP"] = "Повернуть дрон";

Blockly.Msg["BKY_DRONE_SLIDE"] = "скользить %1";
Blockly.Msg["BKY_DRONE_SLIDE_TOOLTIP"] = "Скольжение дрона";

Blockly.Msg["BKY_DRONE_WALK"] = "пролететь %1";
Blockly.Msg["BKY_DRONE_WALK_TOOLTIP"] = "Пролететь вперед";

Blockly.Msg["BKY_DRONE_WAIT"] = "ждать %1";
Blockly.Msg["BKY_DRONE_WAIT_TOOLTIP"] = "Пауза в работе дрона";

Blockly.Msg["BKY_DRONE_SMOKE"] = "дым %1";
Blockly.Msg["BKY_DRONE_SMOKE_TOOLTIP"] = "Включить/выключить дым";

Blockly.Msg["BKY_DRONE_SPEED"] = "скорость %1";
Blockly.Msg["BKY_DRONE_SPEEK_TOOLTIP"] = "Установить скорость дрона (от 0 до 10)";

// ============================================
// БЛОКИ ДАТЧИКОВ (Sensor Blocks)
// ============================================

Blockly.Msg["BKY_SENSOR_KEYPRESSED"] = "клавиша %1 нажата";
Blockly.Msg["BKY_SENSOR_KEYPRESSED_TOOLTIP"] = "Возвращает истину, если клавиша нажата";

Blockly.Msg["ARROW_UP"] = "Стрелка вверх";
Blockly.Msg["ARROW_DOWN"] = "Стрелка вниз";
Blockly.Msg["ARROW_LEFT"] = "Стрелка влево";
Blockly.Msg["ARROW_RIGHT"] = "Стрелка вправо";
Blockly.Msg["SPACE"] = "Пробел";
Blockly.Msg["RETURN"] = "Enter";

Blockly.Msg["BKY_SENSOR_X"] = "координата X";
Blockly.Msg["BKY_SENSOR_X_TOOLTIP"] = "Возвращает координату X дрона";

Blockly.Msg["BKY_SENSOR_Z"] = "координата Z";
Blockly.Msg["BKY_SENSOR_Z_TOOLTIP"] = "Возвращает координату Z дрона";

Blockly.Msg["BKY_SENSOR_ALTITUDE"] = "высота";
Blockly.Msg["BKY_SENSOR_ALTITUDE_TOOLTIP"] = "Возвращает высоту дрона";

Blockly.Msg["BKY_SENSOR_DIRECTION"] = "направление";
Blockly.Msg["BKY_SENSOR_DIRECTION_TOOLTIP"] = "Возвращает направление дрона";

Blockly.Msg["BKY_SENSOR_SPEED"] = "скорость";
Blockly.Msg["BKY_SENSOR_SPEED_TOOLTIP"] = "Возвращает скорость дрона";

// ============================================
// ПОТОК (Flow)
// ============================================

Blockly.Msg["BKY_FLOW_START_TOOLTIP"] = "начало программы";
Blockly.Msg["BKY_FLOW_END_TOOLTIP"] = "конец программы";

// ============================================
// МЕНЮ (Menu)
// ============================================

Blockly.Msg.BKY_NEW = "Создать";
Blockly.Msg.BKY_LOAD = "Загрузить";
Blockly.Msg.BKY_SAVE = "Сохранить";

// ============================================
// КАТЕГОРИИ (Categories)
// ============================================

Blockly.Msg["BKY_CATEGORY_LOGIC"] = "Логика";
Blockly.Msg["BKY_CATEGORY_LOOPS"] = "Циклы";
Blockly.Msg["BKY_CATEGORY_MATH"] = "Математика";
Blockly.Msg["BKY_CATEGORY_TEXT"] = "Текст";
Blockly.Msg["BKY_CATEGORY_LISTS"] = "Списки";
Blockly.Msg["BKY_CATEGORY_VARIABLES"] = "Переменные";
Blockly.Msg["BKY_CATEGORY_FUNCTIONS"] = "Функции";
Blockly.Msg["BKY_CATEGORY_SENSORS"] = "Датчики";
Blockly.Msg["BKY_CATEGORY_DRONE"] = "Дрон";

return Blockly.Msg;
}));
