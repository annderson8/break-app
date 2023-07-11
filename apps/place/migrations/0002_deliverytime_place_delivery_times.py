# Generated by Django 4.2.2 on 2023-07-10 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('place', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DeliveryTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.CharField(max_length=255)),
            ],
        ),
        migrations.AddField(
            model_name='place',
            name='delivery_times',
            field=models.ManyToManyField(to='place.deliverytime'),
        ),
    ]