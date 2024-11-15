# 控制台输入和输出

* System.Console.ReadLine()：获取控制台输入的文本，**返回**输入的文本。
* System.Console.Read()：返回与读取的字符值对应的整数，没有更多字符可用就返回–1。为获取实际字符，需将整数转型为字符
* System.Console.Write()：输出文本后保持当前光标位置在**同一行上**。
* System.Console.WriteLine()：输出文本后**自动换行**。



**字符串插值**：C# 6.0 引入的功能

```csharp
string firstName, lastName;
firstName = System.Console.ReadLine();
lastName = System.Console.ReadLine();

System.Console.WriteLine(
    $"Your full name is {firstName} {lastName}.");
```

通过`$`符号，会把大括号`{}`内容**解析成表达式**，然后编译器**对表达式求值**，再返回到输出内容中。



**复合格式化**：C# 6.0之前的做法

```csharp
System.Console.WriteLine(
    "Your full name is {0} {1}.", firstName, lastName);
```

它为要在字符串中插入的数据标识了两个**索引占位符**。每个占位符的顺序对应格式字符串之后的实参。

{% hint style="info" %}
注意索引值从零开始。每个要插入的实参，或者称为**格式项**，按照与索引值对应的顺序排列在格式字符串之后。
{% endhint %}

